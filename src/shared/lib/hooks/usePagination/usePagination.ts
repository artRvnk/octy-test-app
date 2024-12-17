import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { ConnectionContext } from '@/app/context'

export type TPaginationGetAction = (
  skip: number,
  activeGlobalLoader?: boolean,
) => Promise<void> | void

export type TPaginationReturn = {
  getFirstPage?: (activeGlobalLoader?: boolean | undefined) => void
  isFirstLoad?: boolean
  refreshing?: boolean
  refresh?: () => void
}

type TUsePagination = {
  getAction: TPaginationGetAction
  loading: boolean
  items: Array<unknown>
}

export const usePagination = ({
  getAction,
  loading,
  items = [],
}: TUsePagination): TPaginationReturn => {
  const [refreshing, setRefreshing] = useState(false)

  const { connected } = useContext(ConnectionContext)

  const isFirstLoad = useMemo(
    () => !!loading && !refreshing && !items?.length,
    [loading, refreshing, items?.length],
  )

  // Get first page
  const getFirstPage = useCallback(
    (activeGlobalLoader?: boolean) => {
      console.log('getAction')
      getAction(0, activeGlobalLoader)
    },
    [getAction],
  )

  // Refresh
  const refresh = useCallback(() => {
    if (!connected) return

    setRefreshing(true)
    getFirstPage()
  }, [getFirstPage])

  // Effect for listen end of loading
  useEffect(() => {
    if (!loading) {
      setRefreshing(false)
    }
  }, [loading])

  return {
    getFirstPage,
    isFirstLoad,
    refreshing,
    refresh,
  }
}

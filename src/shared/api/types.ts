import { AxiosResponse } from 'axios'

import { ELanguage } from '@/app/i18n'

export type TResponse<Response = unknown, Config = unknown> = Promise<
  AxiosResponse<Response, Config>
>

export type TPayload<TRequest, TResp> = {
  request: TRequest
  response: TResp
}

export type TQueryErrorData = {
  error: {
    code: string
    info: string
    type: string
  }
}

export type TQueryErrorDefaultData = {
  code?: string
  message?: string
  details?: TQueryErrorData['error']
}

export type TListData<T> = {
  docs: Array<T>
  totalCount: number
}

export type TListParams = Partial<{
  page: number
  skip: number
  limit: number
  order: 1 | -1
  sortBy: string
}>

export type TDefaultQueryParams = {
  limit?: number
  page?: number
  sortBy?: string
  order?: number
} & TDefaultLangProps

export type TResponseDataMeta<Data, Meta = TDefaultMeta> = {
  data: Data
  meta: Meta
}

export type TResponseData<Data> = {
  data: Data
}

export type TDefaultMeta = {
  totalCount: number
}

export type TStandardMeta = {
  status: number
}

export type TDefaultPaginationProps = {
  limit?: number
  page?: number
}

export type TDefaultLangProps = {
  lang?: `${ELanguage}`
}

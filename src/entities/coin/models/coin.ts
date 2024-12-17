export type TCoin = {
  symbol: string
  name: string
  name_full: string
  max_supply: number
  icon_url: string
}

export interface CryptoData {
  [key: string]: TCoin
}

export interface FiatData {
  [coinCode: string]: string
}

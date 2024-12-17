export type TCurrency = {
  symbol: string
  name: string
  name_full: string
  max_supply: number
  icon_url: string
}

export interface CryptoData {
  [key: string]: TCurrency
}

export interface FiatData {
  [currencyCode: string]: string
}

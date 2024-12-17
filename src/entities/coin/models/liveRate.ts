export interface RateData {
  [coinCode: string]: number
}

export type TFiat = {
  code: string
  name: string
}

export type TLiveRate = {
  success: boolean
  terms: string
  privacy: string
  timestamp: number
  target: string
  rates: RateData
}

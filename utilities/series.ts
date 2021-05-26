import { resultFilter, resultFind } from '@/utilities'
import type { SeriesBaseContentT, SeriesBaseResultT } from '@/types'
import type { SeriesBaseI } from '@/interfaces'

export function seriesBaseResultFilter(
  result: SeriesBaseResultT,
  value: any,
  key: keyof SeriesBaseContentT
): SeriesBaseResultT {
  return resultFilter<SeriesBaseI>(result, value, key)
}

export function seriesBaseResultFind(
  result: SeriesBaseResultT,
  value: any,
  key: keyof SeriesBaseContentT
): SeriesBaseResultT {
  return resultFind<SeriesBaseI>(result, value, key)
}

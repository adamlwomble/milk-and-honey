import { resultFilter, resultFind } from '@/utilities'
import type { WeightBaseContentT, WeightBaseResultT } from '@/types'
import type { WeightBaseI } from '@/interfaces'

export function weightBaseResultFilter(
  result: WeightBaseResultT,
  value: any,
  key: keyof WeightBaseContentT
): WeightBaseResultT {
  return resultFilter<WeightBaseI>(result, value, key)
}

export function weightBaseResultFind(
  result: WeightBaseResultT,
  value: any,
  key: keyof WeightBaseContentT
): WeightBaseResultT {
  return resultFind<WeightBaseI>(result, value, key)
}

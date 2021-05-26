import { resultFilter, resultFind } from '@/utilities'
import type { AllergenBaseContentT, AllergenBaseResultT } from '@/types'
import type { AllergenBaseI } from '@/interfaces'

export function allergenBaseResultFilter(
  result: AllergenBaseResultT,
  value: any,
  key: keyof AllergenBaseContentT
): AllergenBaseResultT {
  return resultFilter<AllergenBaseI>(result, value, key)
}

export function allergenBaseResultFind(
  result: AllergenBaseResultT,
  value: any,
  key: keyof AllergenBaseContentT
): AllergenBaseResultT {
  return resultFind<AllergenBaseI>(result, value, key)
}

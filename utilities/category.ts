import { resultFilter, resultFind } from '@/utilities'
import type { CategoryBaseContentT, CategoryBaseResultT } from '@/types'
import type { CategoryBaseI } from '@/interfaces'

export function categoryBaseResultFilter(
  result: CategoryBaseResultT,
  value: any,
  key: keyof CategoryBaseContentT
): CategoryBaseResultT {
  return resultFilter<CategoryBaseI>(result, value, key)
}

export function categoryBaseResultFind(
  result: CategoryBaseResultT,
  value: any,
  key: keyof CategoryBaseContentT
): CategoryBaseResultT {
  return resultFind<CategoryBaseI>(result, value, key)
}

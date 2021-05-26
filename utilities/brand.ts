import { resultFilter, resultFind } from '@/utilities'
import type { BrandBaseContentT, BrandBaseResultT } from '@/types'
import type { BrandBaseI } from '@/interfaces'

export function brandBaseResultFilter(
  result: BrandBaseResultT,
  value: any,
  key: keyof BrandBaseContentT
): BrandBaseResultT {
  return resultFilter<BrandBaseI>(result, value, key)
}

export function brandBaseResultFind(
  result: BrandBaseResultT,
  value: any,
  key: keyof BrandBaseContentT
): BrandBaseResultT {
  return resultFind<BrandBaseI>(result, value, key)
}

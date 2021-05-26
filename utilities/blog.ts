import { resultFilter, resultFind } from '@/utilities'
import type { BlogBaseContentT, BlogBaseResultT } from '@/types'
import type { BlogBaseI } from '@/interfaces'

export function blogBaseResultFilter(
  result: BlogBaseResultT,
  value: any,
  key: keyof BlogBaseContentT
): BlogBaseResultT {
  return resultFilter<BlogBaseI>(result, value, key)
}

export function blogBaseResultFind(
  result: BlogBaseResultT,
  value: any,
  key: keyof BlogBaseContentT
): BlogBaseResultT {
  return resultFind<BlogBaseI>(result, value, key)
}

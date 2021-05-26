import { resultFilter, resultFind } from '@/utilities'
import type { AuthorBaseContentT, AuthorBaseResultT } from '@/types'
import type { AuthorBaseI } from '@/interfaces'

export function authorBaseResultFilter(
  result: AuthorBaseResultT,
  value: any,
  key: keyof AuthorBaseContentT
): AuthorBaseResultT {
  return resultFilter<AuthorBaseI>(result, value, key)
}

export function authorBaseResultFind(
  result: AuthorBaseResultT,
  value: any,
  key: keyof AuthorBaseContentT
): AuthorBaseResultT {
  return resultFind<AuthorBaseI>(result, value, key)
}

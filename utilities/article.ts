import { resultFilter, resultFind } from '@/utilities'
import type { ArticleBaseContentT, ArticleBaseResultT } from '@/types'
import type { ArticleBaseI } from '@/interfaces'

export function articleBaseResultFilter(
  result: ArticleBaseResultT,
  value: any,
  key: keyof ArticleBaseContentT
): ArticleBaseResultT {
  return resultFilter<ArticleBaseI>(result, value, key)
}

export function articleBaseResultFind(
  result: ArticleBaseResultT,
  value: any,
  key: keyof ArticleBaseContentT
): ArticleBaseResultT {
  return resultFind<ArticleBaseI>(result, value, key)
}

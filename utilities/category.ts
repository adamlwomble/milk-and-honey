import type { contentFunc } from '@nuxt/content/types/content'
import type { CategoryT } from '@/types'
import type { CategoryI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<CategoryT.DocumentsT> {
  return await Content.fetch<CategoryI.ContentI>($content, 'category')
}

export function filter(
  documents: CategoryT.DocumentsT,
  value: any,
  key: keyof CategoryT.DocumentT = 'slug'
): CategoryT.QueryResultT {
  return Content.filter<CategoryI.ContentI>(documents, value, key)
}

export function find(
  documents: CategoryT.DocumentsT,
  value: any,
  key: keyof CategoryT.DocumentT = 'slug'
): CategoryT.QueryResultT {
  return Content.find<CategoryI.ContentI>(documents, value, key)
}

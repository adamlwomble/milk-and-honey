import type { contentFunc } from '@nuxt/content/types/content'
import type { AuthorT } from '@/types'
import type { AuthorI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<AuthorT.DocumentsT> {
  return await Content.fetch<AuthorI.ContentI>($content, 'author')
}

export function filter(
  documents: AuthorT.DocumentsT,
  value: any,
  key: keyof AuthorT.DocumentT = 'slug'
): AuthorT.DocumentsSearchT {
  return Content.filter<AuthorI.ContentI>(documents, value, key)
}

export function find(
  documents: AuthorT.DocumentsT,
  value: any,
  key: keyof AuthorT.DocumentT = 'slug'
): AuthorT.DocumentSearchT {
  return Content.find<AuthorI.ContentI>(documents, value, key)
}

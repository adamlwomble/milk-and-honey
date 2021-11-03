import type { contentFunc } from '@nuxt/content/types/content'
import type { BlogT } from '@/types'
import type { BlogI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch($content: contentFunc): Promise<BlogT.DocumentsT> {
  return await Content.fetch<BlogI.ContentI>($content, 'blog')
}

export function filter(
  documents: BlogT.DocumentsT,
  value: any,
  key: keyof BlogT.DocumentT = 'slug'
): BlogT.DocumentsSearchT {
  return Content.filter<BlogI.ContentI>(documents, value, key)
}

export function find(
  documents: BlogT.DocumentsT,
  value: any,
  key: keyof BlogT.DocumentT = 'slug'
): BlogT.DocumentSearchT {
  return Content.find<BlogI.ContentI>(documents, value, key)
}

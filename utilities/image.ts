import type { contentFunc } from '@nuxt/content/types/content'
import type { ImageT } from '@/types'
import type { ImageI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch($content: contentFunc): Promise<ImageT.DocumentsT> {
  return await Content.fetch<ImageI.ContentI>($content, 'image')
}

export function filter(
  documents: ImageT.DocumentsT,
  value: any,
  key: keyof ImageT.DocumentT = 'slug'
): ImageT.QueryResultT {
  return Content.filter<ImageI.ContentI>(documents, value, key)
}

export function find(
  documents: ImageT.DocumentsT,
  value: any,
  key: keyof ImageT.DocumentT = 'slug'
): ImageT.QueryResultT {
  return Content.find<ImageI.ContentI>(documents, value, key)
}

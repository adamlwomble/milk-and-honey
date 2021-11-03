import type { contentFunc } from '@nuxt/content/types/content'
import type { SeriesT } from '@/types'
import type { SeriesI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<SeriesT.DocumentsT> {
  return await Content.fetch<SeriesI.ContentI>($content, 'series')
}

export function filter(
  documents: SeriesT.DocumentsT,
  value: any,
  key: keyof SeriesT.DocumentT = 'slug'
): SeriesT.DocumentsT {
  return Content.filter<SeriesI.ContentI>(documents, value, key)
}

export function find(
  documents: SeriesT.DocumentsT,
  value: any,
  key: keyof SeriesT.DocumentT = 'slug'
): SeriesT.DocumentsT {
  return Content.find<SeriesI.ContentI>(documents, value, key)
}

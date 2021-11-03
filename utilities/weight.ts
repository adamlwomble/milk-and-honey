import type { contentFunc } from '@nuxt/content/types/content'
import type { WeightT } from '@/types'
import type { WeightI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<WeightT.DocumentsT> {
  return await Content.fetch<WeightI.ContentI>($content, 'weight')
}

export function filter(
  documents: WeightT.DocumentsT,
  value: any,
  key: keyof WeightT.DocumentT = 'slug'
): WeightT.DocumentsT {
  return Content.filter<WeightI.ContentI>(documents, value, key)
}

export function find(
  documents: WeightT.DocumentsT,
  value: any,
  key: keyof WeightT.DocumentT = 'slug'
): WeightT.DocumentsT {
  return Content.find<WeightI.ContentI>(documents, value, key)
}

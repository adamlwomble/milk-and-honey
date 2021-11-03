import type { contentFunc } from '@nuxt/content/types/content'
import type { BrandT } from '@/types'
import type { BrandI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch($content: contentFunc): Promise<BrandT.DocumentsT> {
  return await Content.fetch<BrandI.ContentI>($content, 'brand')
}

export function filter(
  documents: BrandT.DocumentsT,
  value: any,
  key: keyof BrandT.DocumentT = 'slug'
): BrandT.DocumentsSearchT {
  return Content.filter<BrandI.ContentI>(documents, value, key)
}

export function find(
  documents: BrandT.DocumentsT,
  value: any,
  key: keyof BrandT.DocumentT = 'slug'
): BrandT.DocumentSearchT {
  return Content.find<BrandI.ContentI>(documents, value, key)
}

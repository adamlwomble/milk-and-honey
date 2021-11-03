import type { contentFunc } from '@nuxt/content/types/content'
import type { AllergenT } from '@/types'
import type { AllergenI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<AllergenT.DocumentsT> {
  return await Content.fetch<AllergenI.ContentI>($content, 'allergen')
}

export function filter(
  documents: AllergenT.DocumentsT,
  value: any,
  key: keyof AllergenT.DocumentT = 'slug'
): AllergenT.DocumentsSearchT {
  return Content.filter<AllergenI.ContentI>(documents, value, key)
}

export function find(
  documents: AllergenT.DocumentsT,
  value: any,
  key: keyof AllergenT.DocumentT = 'slug'
): AllergenT.DocumentSearchT {
  return Content.find<AllergenI.ContentI>(documents, value, key)
}

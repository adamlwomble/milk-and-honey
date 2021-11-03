import type { contentFunc } from '@nuxt/content/types/content'
import type { IngredientT } from '@/types'
import type { IngredientI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<IngredientT.DocumentsT> {
  return await Content.fetch<IngredientI.ContentI>($content, 'ingredient')
}

export function filter(
  documents: IngredientT.DocumentsT,
  value: any,
  key: keyof IngredientT.DocumentT = 'slug'
): IngredientT.QueryResultT {
  return Content.filter<IngredientI.ContentI>(documents, value, key)
}

export function find(
  documents: IngredientT.DocumentsT,
  value: any,
  key: keyof IngredientT.DocumentT = 'slug'
): IngredientT.QueryResultT {
  return Content.find<IngredientI.ContentI>(documents, value, key)
}

import type { contentFunc } from '@nuxt/content/types/content'
import type { RecipeT } from '@/types'
import type { RecipeI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<RecipeT.DocumentsT> {
  return await Content.fetch<RecipeI.ContentI>($content, 'recipe')
}

export function filter(
  documents: RecipeT.DocumentsT,
  value: any,
  key: keyof RecipeT.DocumentT = 'slug'
): RecipeT.DocumentsT {
  return Content.filter<RecipeI.ContentI>(documents, value, key)
}

export function find(
  documents: RecipeT.DocumentsT,
  value: any,
  key: keyof RecipeT.DocumentT = 'slug'
): RecipeT.DocumentsT {
  return Content.find<RecipeI.ContentI>(documents, value, key)
}

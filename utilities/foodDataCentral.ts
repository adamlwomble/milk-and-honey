import type { contentFunc } from '@nuxt/content/types/content'
import type { FoodDataCentralT } from '@/types'
import type { FoodDataCentralI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<FoodDataCentralT.DocumentsT> {
  return await Content.fetch<FoodDataCentralI.ContentI>(
    $content,
    'foodDataCentral'
  )
}

export function filter(
  documents: FoodDataCentralT.DocumentsT,
  value: any,
  key: keyof FoodDataCentralT.DocumentT = 'slug'
): FoodDataCentralT.QueryResultT {
  return Content.filter<FoodDataCentralI.ContentI>(documents, value, key)
}

export function find(
  documents: FoodDataCentralT.DocumentsT,
  value: any,
  key: keyof FoodDataCentralT.DocumentT = 'slug'
): FoodDataCentralT.QueryResultT {
  return Content.find<FoodDataCentralI.ContentI>(documents, value, key)
}

import type { contentFunc } from '@nuxt/content/types/content'
import type { ContentT } from '@/types'
import type { ContentI } from '@/interfaces'

export async function fetch<C>(
  $content: contentFunc,
  key: string
): Promise<ContentT.DocumentsT<C>> {
  const queryResult: ContentT.QueryResultT<C> = await $content(key).fetch<C>()
  return Array.isArray(queryResult) ? queryResult : []
}

/**
 * Accepts a Content Array of type \<T\>, an Array of any type filter values, and a string key for indexing each DocumentT\<T\> instance to determine if it is included in the values; the string key is defaulted to 'slug'.
 * @param documents DocumentsT\<T\> to be filtered
 * @param values Array of any filterable values
 * @param key keyof DocumentT\<T\> for indexing to determine filter values inclusion
 * @returns DocumentsSearchT\<T\> filtered by values and key
 */
const filter: ContentI.SearchMethodI = function <T>(
  documents: ContentT.DocumentsT<T>,
  values: any[],
  key: keyof ContentT.DocumentT<T> = 'slug'
): ContentT.DocumentsSearchT<T> {
  return documents.filter((content: ContentT.DocumentT<T>): boolean =>
    values.includes(content[key])
  )
}

/**
 * Accepts a Content Array of type \<T\>, any value to find, and a string key for indexing each DocumentT\<T\> instance to determine if it is the searched value; the string key is defaulted to 'slug'.
 * @param documents DocumentsT\<T\>
 * @param value Any findable value
 * @param key keyof DocumentT\<T\> for indexing to determine value equality
 * @returns DocumentSearchT\<T\> result of finding the given value in the DocumentsT\<T\> collection
 */
const find: ContentI.SearchMethodI = function <T>(
  documents: ContentT.DocumentsT<T>,
  value: any,
  key: keyof ContentT.DocumentT<T> = 'slug'
): ContentT.DocumentSearchT<T> {
  return documents.find(
    (content: ContentT.DocumentT<T>): boolean => content[key] === value
  )
}

export { filter, find }

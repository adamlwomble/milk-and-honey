import { contentsFilter, contentsFind } from '@/utilities'
import type { ContentT, ResultT } from '@/types'

export function resultFilter<T>(
  result: ResultT<T>,
  value: any,
  key: keyof ContentT<T>
): ResultT<T> {
  return Array.isArray(result) ? contentsFilter(result, value, key) : result
}

export function resultFind<T>(
  result: ResultT<T>,
  value: any,
  key: keyof ContentT<T> = 'slug'
): ResultT<T> {
  return Array.isArray(result) ? contentsFind(result, value, key) : result
}

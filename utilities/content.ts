import type { ContentT, ContentsT, FindingT } from '@/types'

export function contentsFilter<T>(
  contents: ContentsT<T>,
  value: any,
  key: keyof ContentT<T> = 'slug'
): ContentsT<T> {
  return contents.filter(
    (content: ContentT<T>): boolean => content[key] === value
  )
}

export function contentsFind<T>(
  contents: ContentsT<T>,
  value: any,
  key: keyof ContentT<T> = 'slug'
): FindingT<T> {
  return contents.find(
    (content: ContentT<T>): boolean => content[key] === value
  )
}

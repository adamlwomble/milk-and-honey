import type { ContentT } from '@/types'
import type { MetaI } from '@/interfaces'

export function tagMap<T>(
  relation: ContentT.RelationT<T>,
  name: string,
  key: keyof ContentT.DocumentT<T> = 'title'
): MetaI.TagI {
  return {
    content:
      typeof relation === 'object' &&
      Object.prototype.hasOwnProperty.call(relation, key)
        ? relation[key.toString()]
        : 'Unknown',
    name,
  }
}

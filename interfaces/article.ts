import type { AuthorT, CategoryT, ImageT, SeriesT } from '@/types'
import type { ResourceI } from '@/interfaces'

export interface ContentI extends ResourceI.ContentI {
  authors: AuthorT.RelationsT
  categories: CategoryT.RelationsT
  cover: ImageT.RelationT
  publish: string
  series: SeriesT.RelationT
}

import type {
  CategoryBaseRelationsT,
  ImageBaseRelationT,
  SeriesBaseRelationT,
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface ArticleBaseI extends ResourceBaseI {
  categories: CategoryBaseRelationsT
  cover: ImageBaseRelationT
  publish: string
  series: SeriesBaseRelationT
}

import type { BrandT, IngredientT } from '@/types'
import type { ResourceI } from '@/interfaces'

export interface ContentI extends ResourceI.ContentI {
  brand: BrandT.RelationT
  fdcId: number
  ingredient: IngredientT.RelationT
}

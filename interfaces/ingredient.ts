import type { AllergenT, BrandT, RecipeT, VolumeT, WeightT } from '@/types'
import type { ResourceI } from '@/interfaces'

export interface ContentI extends ResourceI.ContentI {
  allergens: AllergenT.RelationsT
  brands: BrandT.RelationsT
  recipe: RecipeT.RelationT
  volume: VolumeT.RelationT
  weight: WeightT.RelationT
}

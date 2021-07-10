import type {
  AllergenBaseRelationsT,
  BrandBaseRelationsT,
  RecipeBaseRelationT,
  VolumeBaseRelationT,
  WeightBaseRelationT,
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface IngredientBaseI extends ResourceBaseI {
  allergens: AllergenBaseRelationsT
  brands: BrandBaseRelationsT
  volume: VolumeBaseRelationT
  weight: WeightBaseRelationT
  recipe: RecipeBaseRelationT
}

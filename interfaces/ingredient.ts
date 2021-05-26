import type {
  AllergenBaseRelationsT,
  BrandBaseRelationsT,
  VolumeBaseRelationT,
  WeightBaseRelationT,
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface IngredientBaseI extends ResourceBaseI {
  allergens: AllergenBaseRelationsT
  brands: BrandBaseRelationsT
  volume: VolumeBaseRelationT
  weight: WeightBaseRelationT
}

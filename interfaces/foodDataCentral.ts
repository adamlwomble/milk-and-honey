import type { BrandBaseRelationT, IngredientBaseRelationT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface FoodDataCentralBaseI extends ResourceBaseI {
  brand: BrandBaseRelationT
  fdcId: number
  ingredient: IngredientBaseRelationT
}

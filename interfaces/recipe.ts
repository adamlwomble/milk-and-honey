import type { IngredientBaseRelationsT, StepBaseRelationsT } from '@/types'
import type { ArticleBaseI } from '@/interfaces'

export interface RecipeBaseI extends ArticleBaseI {
  ingredients: IngredientBaseRelationsT
  time: string
}

export interface RecipePageI extends RecipeBaseI {
  steps: StepBaseRelationsT
}

import type { IngredientT, StepT } from '@/types'
import type { ArticleI } from '@/interfaces'

export interface ContentI extends ArticleI.ContentI {
  ingredients: IngredientT.RelationsT
  time: string
}

export interface PageI extends ContentI {
  steps: StepT.RelationsT
}

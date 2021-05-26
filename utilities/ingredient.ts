import { resultFilter, resultFind } from '@/utilities'
import type { IngredientBaseContentT, IngredientBaseResultT } from '@/types'
import type { IngredientBaseI } from '@/interfaces'

export function ingredientBaseResultFilter(
  result: IngredientBaseResultT,
  value: any,
  key: keyof IngredientBaseContentT
): IngredientBaseResultT {
  return resultFilter<IngredientBaseI>(result, value, key)
}

export function ingredientBaseResultFind(
  result: IngredientBaseResultT,
  value: any,
  key: keyof IngredientBaseContentT
): IngredientBaseResultT {
  return resultFind<IngredientBaseI>(result, value, key)
}

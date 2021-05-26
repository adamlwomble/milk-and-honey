import { resultFilter, resultFind } from '@/utilities'
import type { RecipeBaseContentT, RecipeBaseResultT } from '@/types'
import type { RecipeBaseI } from '@/interfaces'

export function recipeBaseResultFilter(
  result: RecipeBaseResultT,
  value: any,
  key: keyof RecipeBaseContentT
): RecipeBaseResultT {
  return resultFilter<RecipeBaseI>(result, value, key)
}

export function recipeBaseResultFind(
  result: RecipeBaseResultT,
  value: any,
  key: keyof RecipeBaseContentT
): RecipeBaseResultT {
  return resultFind<RecipeBaseI>(result, value, key)
}

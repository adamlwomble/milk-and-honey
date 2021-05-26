import type { BlogBaseRelationsT, RecipeBaseRelationsT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface SeriesBaseI extends ResourceBaseI {
  blogs: BlogBaseRelationsT
  recipes: RecipeBaseRelationsT
}

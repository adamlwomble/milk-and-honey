import type { BlogT, RecipeT } from '@/types'
import type { ResourceI } from '@/interfaces'

export interface ContentI extends ResourceI.ContentI {
  blogs: BlogT.RelationsT
  recipes: RecipeT.RelationsT
}

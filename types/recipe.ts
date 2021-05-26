import type {
  ContentsT,
  ContentT,
  PageT,
  RelationsT,
  RelationT,
  ResultT,
} from '@/types'
import type { RecipeBaseI, RecipePageI } from '@/interfaces'

export type RecipeBaseContentT = ContentT<RecipeBaseI>

export type RecipeBaseContentsT = ContentsT<RecipeBaseI>

export type RecipePageT = PageT<RecipePageI>

export type RecipeBaseRelationT = RelationT<RecipeBaseI>

export type RecipeBaseRelationsT = RelationsT<RecipeBaseI>

export type RecipeBaseResultT = ResultT<RecipeBaseI>

import type {
  ContentsT,
  ContentT,
  RelationsT,
  RelationT,
  ResultT,
} from '@/types'
import type { IngredientBaseI } from '@/interfaces'

export type IngredientBaseContentT = ContentT<IngredientBaseI>

export type IngredientBaseContentsT = ContentsT<IngredientBaseI>

export type IngredientBaseRelationT = RelationT<IngredientBaseI>

export type IngredientBaseRelationsT = RelationsT<IngredientBaseI>

export type IngredientBaseResultT = ResultT<IngredientBaseI>

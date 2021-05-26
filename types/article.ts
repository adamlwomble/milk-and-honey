import type {
  ContentsT,
  ContentT,
  RelationsT,
  RelationT,
  ResultT,
} from '@/types'
import type { ArticleBaseI } from '@/interfaces'

export type ArticleBaseContentT = ContentT<ArticleBaseI>

export type ArticleBaseContentsT = ContentsT<ArticleBaseI>

export type ArticleBaseRelationT = RelationT<ArticleBaseI>

export type ArticleBaseRelationsT = RelationsT<ArticleBaseI>

export type ArticleBaseResultT = ResultT<ArticleBaseI>

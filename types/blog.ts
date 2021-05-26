import type {
  ContentsT,
  ContentT,
  PageT,
  RelationsT,
  RelationT,
  ResultT,
} from '@/types'
import type { BlogBaseI, BlogPageI } from '@/interfaces'

export type BlogBaseContentT = ContentT<BlogBaseI>

export type BlogBaseContentsT = ContentsT<BlogBaseI>

export type BlogPageT = PageT<BlogPageI>

export type BlogBaseRelationT = RelationT<BlogBaseI>

export type BlogBaseRelationsT = RelationsT<BlogBaseI>

export type BlogBaseResultT = ResultT<BlogBaseI>

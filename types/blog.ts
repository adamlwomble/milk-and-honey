import type { ContentT, MetaT } from '@/types'
import type { BlogI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<BlogI.ContentI>

export type DocumentSearchT = ContentT.DocumentSearchT<BlogI.ContentI>

export type DocumentsT = ContentT.DocumentsT<BlogI.ContentI>

export type DocumentsSearchT = ContentT.DocumentsSearchT<BlogI.ContentI>

export type PageT = MetaT.PageT<BlogI.PageI>

export type QueryResultT = ContentT.QueryResultT<BlogI.ContentI>

export type RelationT = ContentT.RelationT<BlogI.ContentI>

export type RelationsT = ContentT.RelationsT<BlogI.ContentI>

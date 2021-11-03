import type { ContentT } from '@/types'
import type { ArticleI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<ArticleI.ContentI>

export type DocumentSearchT = ContentT.DocumentSearchT<ArticleI.ContentI>

export type DocumentsT = ContentT.DocumentsT<ArticleI.ContentI>

export type DocumentsSearchT = ContentT.DocumentsSearchT<ArticleI.ContentI>

export type RelationT = ContentT.RelationT<ArticleI.ContentI>

export type RelationsT = ContentT.RelationsT<ArticleI.ContentI>

export type QueryResultT = ContentT.QueryResultT<ArticleI.ContentI>

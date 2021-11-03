import type { ContentT } from '@/types'
import type { AuthorI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<AuthorI.ContentI>

export type DocumentSearchT = ContentT.DocumentSearchT<AuthorI.ContentI>

export type DocumentsT = ContentT.DocumentsT<AuthorI.ContentI>

export type DocumentsSearchT = ContentT.DocumentsSearchT<AuthorI.ContentI>

export type RelationT = ContentT.RelationT<AuthorI.ContentI>

export type RelationsT = ContentT.RelationsT<AuthorI.ContentI>

export type QueryResultT = ContentT.QueryResultT<AuthorI.ContentI>

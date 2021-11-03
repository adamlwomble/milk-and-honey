import type { ContentT } from '@/types'
import type { AllergenI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<AllergenI.ContentI>

export type DocumentSearchT = ContentT.DocumentSearchT<AllergenI.ContentI>

export type DocumentsT = ContentT.DocumentsT<AllergenI.ContentI>

export type DocumentsSearchT = ContentT.DocumentsSearchT<AllergenI.ContentI>

export type QueryResultT = ContentT.QueryResultT<AllergenI.ContentI>

export type RelationT = ContentT.RelationT<AllergenI.ContentI>

export type RelationsT = ContentT.RelationsT<AllergenI.ContentI>

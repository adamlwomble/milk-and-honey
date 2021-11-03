import type { ContentT, MetaT } from '@/types'
import type { RecipeI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<RecipeI.ContentI>

export type DocumentSearchT = ContentT.DocumentSearchT<RecipeI.ContentI>

export type DocumentsT = ContentT.DocumentsT<RecipeI.ContentI>

export type DocumentsSearchT = ContentT.DocumentsSearchT<RecipeI.ContentI>

export type PageT = MetaT.PageT<RecipeI.PageI>

export type QueryResultT = ContentT.QueryResultT<RecipeI.ContentI>

export type RelationT = ContentT.RelationT<RecipeI.ContentI>

export type RelationsT = ContentT.RelationsT<RecipeI.ContentI>

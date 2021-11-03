import type { ContentT } from '@/types'
import type { VolumeI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<VolumeI.ContentI>

export type DocumentSearchT = ContentT.DocumentSearchT<VolumeI.ContentI>

export type DocumentsT = ContentT.DocumentsT<VolumeI.ContentI>

export type DocumentsSearchT = ContentT.DocumentsSearchT<VolumeI.ContentI>

export type QueryResultT = ContentT.QueryResultT<VolumeI.ContentI>

export type RelationT = ContentT.RelationT<VolumeI.ContentI>

export type RelationsT = ContentT.RelationsT<VolumeI.ContentI>

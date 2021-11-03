import type { ContentT } from '@/types'
import type { FoodDataCentralI } from '@/interfaces'

export type DocumentT = ContentT.DocumentT<FoodDataCentralI.ContentI>

export type DocumentSearchT =
  ContentT.DocumentSearchT<FoodDataCentralI.ContentI>

export type DocumentsT = ContentT.DocumentsT<FoodDataCentralI.ContentI>

export type DocumentsSearchT =
  ContentT.DocumentsSearchT<FoodDataCentralI.ContentI>

export type QueryResultT = ContentT.QueryResultT<FoodDataCentralI.ContentI>

export type RelationT = ContentT.RelationT<FoodDataCentralI.ContentI>

export type RelationsT = ContentT.RelationsT<FoodDataCentralI.ContentI>

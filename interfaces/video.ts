import type { ImageT } from '@/types'
import type { AssetI } from '@/interfaces'

export interface SourceI extends AssetI.SourceI {
  src: string
}

export interface ContentI extends AssetI.ContentI {
  poster: ImageT.RelationT
  sources: SourceI[]
}

import type { ImageT } from '@/types'
import type { AssetI } from '@/interfaces'

export interface SourceI extends AssetI.SourceI {
  srcset: string
}

export interface ContentI {
  image: ImageT.RelationT
  sources: SourceI[]
}

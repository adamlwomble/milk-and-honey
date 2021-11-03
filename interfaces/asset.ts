import type { ResourceI } from '@/interfaces'

export interface ContentI extends ResourceI.ContentI {
  height: number
  src: string
  width: number
}

export interface SourceI {
  media: string
  type: string
}

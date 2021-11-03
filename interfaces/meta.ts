import type { AuthorT } from '@/types'
import type { ResourceI } from '@/interfaces'

export interface ContentI extends ResourceI.ContentI {
  authors: AuthorT.RelationsT
}

export interface TagI {
  content: string
  name: string
}

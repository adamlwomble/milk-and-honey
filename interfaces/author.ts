import type { ImageBaseRelationT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface AuthorBaseI extends ResourceBaseI {
  image: ImageBaseRelationT
}

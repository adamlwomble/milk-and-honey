import type { ResourceBaseI } from '@/interfaces'

export interface MetaBaseI {
  content: string
  name: string
}

export interface MetaPageI extends ResourceBaseI {
  author: string
}

import type { ContentsT, ContentT } from '@/types'

export type ResultT<T> = ContentT<T> | ContentsT<T> | undefined

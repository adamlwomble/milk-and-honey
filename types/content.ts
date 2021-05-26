import type { IContentDocument } from '@nuxt/content/types/content'

export type ContentT<T> = T & IContentDocument

export type ContentsT<T> = ContentT<T>[]

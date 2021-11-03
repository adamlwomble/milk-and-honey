import type { ArticleI } from '@/interfaces'

export interface ContentI extends ArticleI.ContentI {}

export interface PageI extends ContentI {
  body: string
}

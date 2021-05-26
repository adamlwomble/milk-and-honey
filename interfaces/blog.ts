import type { ArticleBaseI } from '@/interfaces'

export interface BlogBaseI extends ArticleBaseI {}

export interface BlogPageI extends BlogBaseI {
  body: string
}

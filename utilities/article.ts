import type { contentFunc } from '@nuxt/content/types/content'
import type { ArticleT, SeriesT, AuthorT, CategoryT, ImageT } from '@/types'
import type { ArticleI } from '@/interfaces'
import { Author, Category, Content, Series } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<ArticleT.DocumentsT> {
  return await Content.fetch<ArticleI.ContentI>($content, 'article')
}

export function filter(
  documents: ArticleT.DocumentsT,
  value: any,
  key: keyof ArticleT.DocumentT = 'slug'
): ArticleT.DocumentsSearchT {
  return Content.filter<ArticleI.ContentI>(documents, value, key)
}

export function find(
  documents: ArticleT.DocumentsT,
  value: any,
  key: keyof ArticleT.DocumentT = 'slug'
): ArticleT.DocumentSearchT {
  return Content.find<ArticleI.ContentI>(documents, value, key)
}

export function map(
  documents: ArticleT.DocumentT | ArticleT.DocumentsT,
  authors: AuthorT.DocumentsT,
  categories: CategoryT.DocumentsT,
  images: ImageT.DocumentsT,
  series: SeriesT.DocumentsT
): ArticleT.DocumentsT {
  if (
    !!documents &&
    Array.isArray(authors) &&
    Array.isArray(categories) &&
    Array.isArray(images) &&
    Array.isArray(series)
  ) {
    if (Array.isArray(documents)) {
      documents.map(
        (content): ArticleT.DocumentsT =>
          map(content, authors, categories, images, series)
      )
    } else {
      const relations = [
        {
          key: 'authors',
          values: Author.find(authors, documents.authors),
        },
        {
          key: 'categories',
          values: Category.filter(categories, documents.categories),
        },
        {
          key: 'series',
          values: Series.filter(series, documents.series),
        },
      ]

      for (const { key, values } of relations) {
        documents[key] = values
      }
    }
  }

  return Array.isArray(documents) ? documents : [documents]
}

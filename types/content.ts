import type { IContentDocument } from '@nuxt/content/types/content'

/**
 * Intersection Content type representing both the generic type \<T\> and IContentDocument.
 */
export type DocumentT<T> = T & IContentDocument

/**
 * Union type DocumentT\<T\> and undefined representing the result of searching DocumentsT\<T\> for a specific value.
 */
export type DocumentSearchT<T> = DocumentT<T> | undefined

/**
 * Content Array of type \<T\>.
 */
export type DocumentsT<T> = DocumentT<T>[]

/**
 * Union type DocumentsT\<T\> and undefined representing the result of searching DocumentsT\<T\> for specified values.
 */
export type DocumentsSearchT<T> = DocumentsT<T> | undefined

/**
 * Content, Content collection, or undefined query result of type \<T\>.
 */
export type QueryResultT<T> = DocumentSearchT<T> | DocumentsSearchT<T>

/**
 * String, Content of type \<T\>, or undefined representing a Content relationship.
 */
export type RelationT<T> = string | DocumentSearchT<T>

/**
 * Array of strings or Content type \<T\>, or undefined representing a collection of Content relationships.
 */
export type RelationsT<T> = string[] | DocumentsSearchT<T>

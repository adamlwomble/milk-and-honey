import type { ContentT } from '@/types'

/**
 * Content type search method signature where the Content type and return type are specified in type arguments.
 */
export interface SearchMethodI {
  <C>(
    contents: ContentT.DocumentsT<C>,
    value: any,
    key: keyof ContentT.DocumentT<C>
  ): any
}

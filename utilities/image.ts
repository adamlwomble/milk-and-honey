import { resultFilter, resultFind } from '@/utilities'
import type { ImageBaseContentT, ImageBaseResultT } from '@/types'
import type { ImageBaseI } from '@/interfaces'

export function imageBaseResultFilter(
  result: ImageBaseResultT,
  value: any,
  key: keyof ImageBaseContentT
): ImageBaseResultT {
  return resultFilter<ImageBaseI>(result, value, key)
}

export function imageBaseResultFind(
  result: ImageBaseResultT,
  value: any,
  key: keyof ImageBaseContentT
): ImageBaseResultT {
  return resultFind<ImageBaseI>(result, value, key)
}

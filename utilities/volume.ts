import type { contentFunc } from '@nuxt/content/types/content'
import type { VolumeT } from '@/types'
import type { VolumeI } from '@/interfaces'
import { Content } from '@/utilities'

export async function fetch(
  $content: contentFunc
): Promise<VolumeT.DocumentsT> {
  return await Content.fetch<VolumeI.ContentI>($content, 'volume')
}

export function filter(
  documents: VolumeT.DocumentsT,
  value: any,
  key: keyof VolumeT.DocumentT = 'slug'
): VolumeT.DocumentsT {
  return Content.filter<VolumeI.ContentI>(documents, value, key)
}

export function find(
  documents: VolumeT.DocumentsT,
  value: any,
  key: keyof VolumeT.DocumentT = 'slug'
): VolumeT.DocumentsT {
  return Content.find<VolumeI.ContentI>(documents, value, key)
}

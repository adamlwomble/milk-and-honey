import { resultFilter, resultFind } from '@/utilities'
import type { VolumeBaseContentT, VolumeBaseResultT } from '@/types'
import type { VolumeBaseI } from '@/interfaces'

export function volumeBaseResultFilter(
  result: VolumeBaseResultT,
  value: any,
  key: keyof VolumeBaseContentT
): VolumeBaseResultT {
  return resultFilter<VolumeBaseI>(result, value, key)
}

export function volumeBaseResultFind(
  result: VolumeBaseResultT,
  value: any,
  key: keyof VolumeBaseContentT
): VolumeBaseResultT {
  return resultFind<VolumeBaseI>(result, value, key)
}

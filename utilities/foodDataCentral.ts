import { resultFilter, resultFind } from '@/utilities'
import type {
  FoodDataCentralBaseContentT,
  FoodDataCentralBaseResultT,
} from '@/types'
import type { FoodDataCentralBaseI } from '@/interfaces'

export function foodDataCentralBaseResultFilter(
  result: FoodDataCentralBaseResultT,
  value: any,
  key: keyof FoodDataCentralBaseContentT
): FoodDataCentralBaseResultT {
  return resultFilter<FoodDataCentralBaseI>(result, value, key)
}

export function foodDataCentralBaseResultFind(
  result: FoodDataCentralBaseResultT,
  value: any,
  key: keyof FoodDataCentralBaseContentT
): FoodDataCentralBaseResultT {
  return resultFind<FoodDataCentralBaseI>(result, value, key)
}

<template>
  <h1>Allergens</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { AllergenT } from '@/types'
import { Allergen } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const allergens: AllergenT.DocumentsT = await Allergen.fetch($content)
      return { allergens }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

<template>
  <h1>Brands</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { BrandT } from '@/types'
import { Brand } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const brands: BrandT.DocumentsT = await Brand.fetch($content)
      return { brands }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

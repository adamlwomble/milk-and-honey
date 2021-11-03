<template>
  <h1>Categories</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { CategoryT } from '@/types'
import { Category } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const categories: CategoryT.DocumentsT = await Category.fetch($content)
      return { categories }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

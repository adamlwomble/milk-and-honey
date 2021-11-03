<template>
  <h1>Series</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { SeriesT } from '@/types'
import { Series } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const series: SeriesT.DocumentsT = await Series.fetch($content)
      return { series }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

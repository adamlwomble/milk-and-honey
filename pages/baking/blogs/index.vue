<template>
  <h1>Blogs</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { BlogT } from '@/types'
import { Blog } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const blogs: BlogT.DocumentsT = await Blog.fetch($content)
      return { blogs }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

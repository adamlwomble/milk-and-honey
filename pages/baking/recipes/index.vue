<template>
  <h1>Recipes</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { RecipeT } from '@/types'
import { Recipe } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const recipes: RecipeT.DocumentsT = await Recipe.fetch($content)
      return { recipes }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

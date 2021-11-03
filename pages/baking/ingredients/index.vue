<template>
  <h1>Ingredients</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import type { IngredientT } from '@/types'
import { Ingredient } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const ingredients: IngredientT.DocumentsT = await Ingredient.fetch(
        $content
      )
      return { ingredients }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

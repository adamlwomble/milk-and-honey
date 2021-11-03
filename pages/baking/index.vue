<template>
  <h1>Baking</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  AllergenT,
  AuthorT,
  BlogT,
  BrandT,
  CategoryT,
  ImageT,
  IngredientT,
  RecipeT,
  SeriesT,
  VolumeT,
  WeightT,
} from '@/types'
import {
  Allergen,
  Author,
  Blog,
  Brand,
  Category,
  Image,
  Ingredient,
  Recipe,
  Series,
  Volume,
  Weight,
} from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object> {
    try {
      const allergens: AllergenT.DocumentsT = await Allergen.fetch($content)

      const authors: AuthorT.DocumentsT = await Author.fetch($content)

      const blogs: BlogT.DocumentsT = await Blog.fetch($content)

      const brands: BrandT.DocumentsT = await Brand.fetch($content)

      const categories: CategoryT.DocumentsT = await Category.fetch($content)

      const images: ImageT.DocumentsT = await Image.fetch($content)

      const ingredients: IngredientT.DocumentsT = await Ingredient.fetch(
        $content
      )

      const recipes: RecipeT.DocumentsT = await Recipe.fetch($content)

      const series: SeriesT.DocumentsT = await Series.fetch($content)

      const volumes: VolumeT.DocumentsT = await Volume.fetch($content)

      const weights: WeightT.DocumentsT = await Weight.fetch($content)

      return {
        allergens,
        authors,
        blogs,
        brands,
        categories,
        images,
        ingredients,
        recipes,
        series,
        volumes,
        weights,
      }
    } catch (e: any) {
      error({ message: e.toString() })
      return e
    }
  },
})
</script>

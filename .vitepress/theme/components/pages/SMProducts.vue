<script setup lang="ts">
import ProductsItem from './../ProductsItem.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header text-wrap">
            <h1 class="page-title" v-html="frontmatter.title"></h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="products" v-if="frontmatter.products">
            <ProductsItem
            :idx="i"
            :title="product.title"
            :items="product.items"
            :more="product.more"
            :key="product.title"
            v-for="(product, i) in frontmatter.products" />
        </div>
    </div>
</template>

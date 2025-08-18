<script setup lang="ts">
import ArticleCard from '../article/ArticleCard.vue'
import { useData } from '../../composables/data'
import { articlePages } from './../../support/articles'

const { frontmatter } = useData()
const articles = articlePages
</script>

<template>
    <div class="page__content">
        <div class="page-header">
            <h1 class="page-title">{{ frontmatter.title }}</h1>
        </div>

        <div class="articles" v-if="articles.length">
            <div class="articles__item" v-for="article in articles" :key="article.id">
                <ArticleCard
                :id="article.id"
                :title="article.title"
                :image="article.image"
                :author="article.author ? article.author.name : undefined" />
            </div>
        </div>
    </div>
</template>

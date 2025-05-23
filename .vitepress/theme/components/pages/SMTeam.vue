<script setup lang="ts">
import TeamCards from './../TeamCards.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <h1 class="page-title">{{ frontmatter.title }}</h1>
        <TeamCards />
    </div>
</template>

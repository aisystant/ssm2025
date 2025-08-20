<script setup lang="ts">
import ResearchParticipate from './../ResearchParticipate.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header">
            <h1 class="page-title">{{ frontmatter.title }}</h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="text-content">
            <Content />
        </div>
    </div>

    <ResearchParticipate
    :title="frontmatter.participate.title"
    :list="frontmatter.participate.list"
    :program="frontmatter.participate.program"
    v-if="frontmatter.participate" />
</template>

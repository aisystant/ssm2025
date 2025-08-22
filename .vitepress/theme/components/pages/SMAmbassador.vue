<script setup lang="ts">
import AmbassadorCard from '../ambassador/AmbassadorCard.vue'
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

    <div class="ambassadors" v-if="frontmatter.ambassadors">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col" v-for="ambassador in frontmatter.ambassadors" :key="ambassador">
                    <AmbassadorCard :path="ambassador" />
                </div>
            </div>
        </div>
    </div>
</template>

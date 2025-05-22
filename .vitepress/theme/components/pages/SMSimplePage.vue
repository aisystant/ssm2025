<script setup lang="ts">
import { useData } from '../../composables/data'
const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <Content
        :class="frontmatter.class" />
    </div>
</template>

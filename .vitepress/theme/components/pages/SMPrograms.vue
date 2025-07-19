<script setup lang="ts">
import ProgramList from './../ProgramList.vue'
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content pb-0">
        <div class="page-header">
            <h1 class="page-title">{{ frontmatter.title }}</h1>
        </div>

        <ProgramList />
    </div>

    <ContactUs />
</template>

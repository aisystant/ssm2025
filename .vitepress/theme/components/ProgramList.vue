<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { isActive } from '../shared'
import ProgramCard from './ProgramCard.vue'

const { page } = useData()
const isPrograms = computed(() => {
    return isActive(page.value.relativePath, '/programs/')
})

const data = import.meta.glob('/programs/index.md', { eager: true })
const fm = data['/programs/index.md'].__pageData?.frontmatter ?? {}
</script>

<template>
    <h2 class="programs-title" v-html="fm.title" v-if="fm.title && !isPrograms"></h2>

    <div class="programs" v-if="fm.programs">
        <div class="programs__item" v-for="program in fm.programs" :key="JSON.stringify(program)">
            <ProgramCard :program="program" />
        </div>
    </div>
</template>

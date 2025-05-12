<script setup lang="ts">
import { computed } from 'vue'

const modules = import.meta.glob('/team/*.md', { eager: true })

const teamPages = computed(() =>
  Object.entries(modules)
    .map(([path, mod]: any) => {
      const id = path.match(/\/team\/(.*?)\.md$/)?.[1]
      const fm = mod.__pageData?.frontmatter ?? {}

      return {
        id,
        name: fm.name,
        surname: fm.surname,
        order: fm.order,
      }
    })
    .filter(p => typeof p.order === 'number')
    .sort((a, b) => a.order - b.order)
)
</script>

<template>
  <div>
    <h2>Team Members</h2>
    <ul v-if="teamPages.length">
      <li v-for="p in teamPages" :key="p.id">
        <a :href="`/team/${p.id}/`">{{ p.name }} {{ p.surname }}</a>
      </li>
    </ul>
    <p v-else>No valid team members found</p>
  </div>
</template>

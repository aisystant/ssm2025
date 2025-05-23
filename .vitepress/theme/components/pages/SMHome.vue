<script setup lang="ts">
import TeamCards from './../TeamCards.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="programs-section">
        <div class="section-row">
            <div class="section-col" v-for="program in frontmatter.programs" :key="JSON.stringify(program)">
                <div class="program-item">
                    <a :href="program.anchor" class="btn">
                        {{ program.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>

    <section class="team-section">
        <h2 class="section-title">
            {{ frontmatter.team.title }}
        </h2>
        <div class="section-subtitle">
            {{ frontmatter.team.subtitle }}
        </div>
        <TeamCards />
    </section>
</template>

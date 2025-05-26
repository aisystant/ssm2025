<script setup lang="ts">
import ProgramCard from './../ProgramCard.vue'
import SubscribeForm from './../SubscribeForm.vue'
import TeamCards from './../TeamCards.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="programs-section">
        <div class="section-row">
            <div class="section-col" v-for="program in frontmatter.programs" :key="JSON.stringify(program)">
                <div class="program-item">
                    <a :href="`#${program.id}`" class="btn">
                        {{ program.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>

    <ProgramCard id="selfdev" />
    <ProgramCard id="orgdev" />
    <SubscribeForm />

    <section class="team-section">
        <h2 class="section-title" v-html="frontmatter.team.title"></h2>
        <div class="section-subtitle" v-html="frontmatter.team.subtitle" v-if="frontmatter.team.subtitle"></div>
        <TeamCards />
    </section>
</template>

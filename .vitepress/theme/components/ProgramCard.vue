<script setup lang="ts">
import { computed } from 'vue';
import { useData } from './../composables/data'

const { frontmatter } = useData()

const props = defineProps<{
    id: string
}>()

const program = computed(() => {
    return frontmatter.value[props.id]
})
</script>

<template>
    <section class="program-block" :id="id">
        <h2 class="section-title" v-html="program.title"></h2>
        <div class="section-subtitle" v-html="program.subtitle" v-if="program.subtitle"></div>

        <div class="section-row" v-if="program.cards">
            <div class="section-col" v-for="card in program.cards" :key="JSON.stringify(card)">
                <a :href="card.link" :class="`program-card ${id}`">
                    <div class="card-body">
                        <div class="mb-2" v-html="card.semester" v-if="card.semester"></div>
                        <div class="card-title" v-html="card.name"></div>
                        <div class="card-text">
                            <ul class="courses-list" v-if="card.courses">
                                <li v-for="course in card.courses" :key="JSON.stringify(course)">
                                    <span class="course-name" v-html="course"></span>
                                </li>
                            </ul>
                        </div>

                        <div class="card-date" v-if="card.date">
                            <time v-html="card.date"></time>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="section-row" v-else>
            <div class="section-col">
                <a :href="program.link" :class="`program-card ${id}`">
                    <div class="card-body">
                        <div class="card-title" v-html="program.name"></div>
                        <ul class="courses-list" v-if="program.courses">
                            <li v-for="course in program.courses" :key="JSON.stringify(course)">
                                <time v-html="course.date" v-if="course.date"></time>
                                <span class="course-name" v-html="course.name"></span>
                            </li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

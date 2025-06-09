<script setup lang="ts">
interface Course {
    name: string
    date: string
}

interface Program {
    head?: string
    title: string
    button?: string
    link: string
    text?: string[]
    courses: Course[]
}

defineProps<{
    program: Program
}>()
</script>

<template>
    <div class="program-card">
        <div class="card-body">
            <div class="card-head">
                <div class="card-sup" v-html="program.head" v-if="program.head"></div>
                <h3 class="card-title" v-html="program.title"></h3>
            </div>

            <div class="card-button">
                <a :href="program.link.trim()" class="btn">
                    {{ program.button || 'Подробнее о программе' }}
                </a>
            </div>

            <div class="card-text" v-if="program.text">
                <p v-for="item in program.text" :key="JSON.stringify(item)" v-html="item"></p>
            </div>
        </div>
    </div>

    <div class="program-courses">
        <div class="course-item" v-for="course in program.courses" :key="JSON.stringify(course)">
            <div class="course-name" v-html="course.name"></div>
            <div class="start-date">
                Старт — {{ course.date }}
            </div>
        </div>
    </div>
</template>

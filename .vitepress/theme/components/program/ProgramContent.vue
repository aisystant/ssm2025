<script setup lang="ts">
import CourseCollapse from './CourseCollapse.vue'
import { useUrlSearchParams } from '@vueuse/core'
import { ref, nextTick, onMounted } from 'vue'

const props = defineProps<{
    title: string,
    subtitle?: string,
    button?: string,
    link?: string,
    courses: {
        name: string
        path: string
    }[],
}>()

const activeTab = ref<string | null>(null)

onMounted(() => {
    const params = useUrlSearchParams('history')
    const tabParam = params.tab?.toString()
    const courseExists = props.courses.some(course => course.path === tabParam)

    if (tabParam && courseExists) {
        activeTab.value = tabParam
    }
})
</script>

<template>
    <section class="program-content" id="content">
        <div class="container">
            <div class="section-body">
                <h2 class="section-title" v-html="title"></h2>
                <div class="section-subtitle" v-html="subtitle" v-if="subtitle"></div>

                <CourseCollapse
                v-for="course in courses" :key="course.path"
                :name="course.name"
                :path="course.path"
                :open="course.path === activeTab" />

                <div class="section-button" v-if="button && link">
                    <a :href="link.trim()" class="btn">
                        {{ button }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

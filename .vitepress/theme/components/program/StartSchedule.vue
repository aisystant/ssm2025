<script setup lang="ts">
interface Course {
    name: string
    lessons?: string
    date: string
    price?: string
    text: string[]
    link?: string
}

defineProps<{
    title: string,
    buy?: string,
    program: {
        head: string
        button: string
        link: string
    },
    courses: Course[]
}>()
</script>

<template>
    <section class="program-starting" id="schedule">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-row">
            <div class="starting-items">
                <div class="course-item" v-for="course in courses" :key="JSON.stringify(course)">
                    <div class="course-card">
                        <div class="card-head">
                            <div class="start-date">
                                Старт — {{ course.date }}
                            </div>
                            <div class="course-name" v-html="course.name"></div>
                        </div>

                        <div class="course-desc" v-html="course.lessons" v-if="course.lessons"></div>

                        <div class="card-body">
                            <div class="course-text">
                                <template v-for="item in course.text" :key="JSON.stringify(item)">
                                    <p v-html="item"></p>
                                </template>
                            </div>

                            <div class="course-cart">
                                <div class="course-price" v-if="course.price">
                                    {{ course.price }}
                                </div>
                                <div class="course-button" v-if="course.link">
                                    <a :href="course.link.trim()" class="btn" target="_blank">
                                        {{ buy || 'Купить' }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="starting-program">
                <div class="h3" v-html="program.head"></div>
                <a :href="program.link.trim()" class="btn" target="_blank">
                    {{ program.button }}
                </a>
            </div>
        </div>
    </section>
</template>

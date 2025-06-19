<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    text?: string[],
    buttons?: {
        name: string
        link: string
        style?: string
    }[]
}>()
</script>

<template>
    <section class="intro">
        <div class="container">
            <div class="intro__body">
                <div class="intro__col">
                    <div class="intro-text">
                        <h1 class="intro-title" v-html="title"></h1>
                        <div class="row g-3" v-if="text">
                            <template v-for="item in text" :key="JSON.stringify(item)">
                                <div class="col-md-6 col-lg-12" v-html="item"></div>
                            </template>
                        </div>
                    </div>

                    <div class="intro-buttons" v-if="buttons">
                        <template v-for="button in buttons" :key="JSON.stringify(button)">
                            <a
                                :href="button.link.trim()"
                                :class="`btn ${button.style || 'btn-outline'}`">
                                {{ button.name }}
                            </a>
                        </template>
                    </div>
                </div>

                <div class="intro__col">
                    <img
                        :src="`/images/${image}`"
                        class="intro-image"
                        alt="Программы обучения">
                </div>
            </div>
        </div>
    </section>
</template>

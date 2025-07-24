<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    description?: string,
    buttons?: {
        name: string
        link: string
        target?: string
        style?: string
    }[]
}>()
</script>

<template>
    <section class="howtostart-intro">
        <div class="section-container">
            <div class="section-row">
                <div class="intro-body">
                    <h1 class="howtostart-title" v-html="title"></h1>
                    <div class="howtostart-text" v-html="description" v-if="description"></div>

                    <div class="howtostart-buttons" v-if="buttons">
                        <template v-for="button in buttons" :key="button.name">
                            <a
                                :href="button.link.trim()"
                                :class="`btn ${button.style || 'btn-outline'}`"
                                :target="button.target ?? undefined">
                                {{ button.name }}
                            </a>
                        </template>
                    </div>
                </div>

                <div class="intro-image">
                    <img :src="`/images/${image}`">
                </div>
            </div>
        </div>
    </section>
</template>

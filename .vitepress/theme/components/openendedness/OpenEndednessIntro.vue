<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    description: string,
    buttons?: {
        name: string
        link: string
        target?: string
        style?: string
    }[]
}>()
</script>

<template>
    <section class="openendedness-intro">
        <div class="section-container">
            <div class="section-row">
                <div class="intro-body">
                    <h1 class="openendedness-title" v-html="title"></h1>
                    <div class="openendedness-text" v-html="description"></div>

                    <div class="openendedness-buttons" v-if="buttons">
                        <template v-for="button in buttons" :key="JSON.stringify(button)">
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
                    <img :src="`/images/${image}`" :alt="title">
                </div>
            </div>
        </div>
    </section>
</template>

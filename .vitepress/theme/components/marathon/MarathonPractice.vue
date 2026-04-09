<script setup lang="ts">
interface Figure {
    icon: string
    name: string
}

defineProps<{
    title: string,
    items: Figure[],
}>()
</script>

<template>
    <section class="marathon-practice">
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="section-row">
                <div class="section-col" v-for="figure in items" :key="JSON.stringify(figure)">
                    <figure class="practice-figure">
                        <div class="figure-icon">
                            <img :src="`/images/${figure.icon}`">
                        </div>
                        <figcaption class="figure-caption" v-html="figure.name"></figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

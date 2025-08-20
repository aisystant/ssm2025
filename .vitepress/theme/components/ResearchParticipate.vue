<script setup lang="ts">
defineProps<{
    title: string,
    list?: string[],
    program: {
        name: string
        image: string
        link: string
    },
}>()
</script>

<template>
    <section class="research-participate">
        <div class="container">
            <div class="section-body">
                <div class="section-row">
                    <div class="section-col">
                        <h2 v-html="title"></h2>

                        <div class="section-text">
                            <ul class="divided" v-if="list">
                                <template v-for="item in list" :key="item">
                                    <li v-html="item"></li>
                                </template>
                            </ul>
                        </div>
                    </div>
                    <div class="section-image">
                        <div class="research-program">
                            <img
                                :src="`/images/${program.image}`"
                                class="card-image"
                                :alt="program.name">

                            <div class="card-button">
                                <a class="btn" :href="program.link.trim()">
                                    {{ program.name }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

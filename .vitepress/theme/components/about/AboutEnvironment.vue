<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    text?: string,
    list: string[],
    footer?: string
}>()
</script>

<template>
    <section class="about-environment">
        <div class="container">
            <div class="section-row">
                <div class="section-body">
                    <h2 v-html="title"></h2>
                    <p v-html="text" v-if="text"></p>

                    <ul class="list-circle">
                        <template v-for="item in list" :key="item">
                            <li v-html="item"></li>
                        </template>
                    </ul>

                    <p class="fw-light" v-html="footer" v-if="footer"></p>
                </div>

                <div class="section-image">
                    <img :src="`/images/${image}`">
                </div>
            </div>
        </div>
    </section>
</template>

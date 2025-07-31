<script setup lang="ts">
defineProps<{
    title: string,
    text: string[],
    items: {
        text: string
        style?: string
    }[]
}>()
</script>

<template>
    <section class="about-whowe">
        <div class="container">
            <div class="section-body">
                <div class="section-row">
                    <div class="section-col">
                        <h2 class="whowe-title" v-html="title"></h2>

                        <div class="whowe-text">
                            <template v-for="item in text" :key="item">
                                <p v-html="item"></p>
                            </template>
                        </div>
                    </div>

                    <div class="section-col">
                        <div class="row whowe-row">
                            <template v-for="item in items" :key="item.text">
                                <div :class="item.style ? 'col' : 'col-12'">
                                    <div :class="`whowe-item ${item.style ?? undefined}`" v-html="item.text"></div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

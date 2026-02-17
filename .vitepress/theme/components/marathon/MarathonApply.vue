<script setup lang="ts">
defineProps<{
    title: string,
    head?: {
        name: string
        price: string
    },
    body?: {
        name: string
        list: string[]
    },
    button?: string,
}>()
</script>

<template>
    <section class="marathon-apply">
        <div class="section-row">
            <div class="section-body">
                <h2 class="section-title" v-html="title"></h2>

                <div class="marathon-price" v-if="head">
                    <div class="price-row">
                        <div class="price-col" v-html="head.name"></div>
                        <div class="price-col">
                            <div class="price-wrap" v-html="head.price"></div>
                        </div>
                    </div>
                </div>

                <div class="apply-body" v-if="body">
                    <h3 class="apply-title" v-if="body.name"></h3>
                    <ul class="apply-list">
                        <template v-for="item in body.list" :key="item">
                            <li v-html="item"></li>
                        </template>
                    </ul>
                </div>

                <div class="apply-action" v-if="button">
                    <button class="btn">{{ button }}</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    text?: string,
    items: {
        name: string
        text?: string
    }[]
}>()
</script>

<template>
    <section class="openendedness-whatis">
        <div class="container">
            <div class="section-row">
                <div class="whatis-head">
                    <h2 class="whatis-title" v-html="title"></h2>
                    <span v-html="text" v-if="text"></span>
                </div>

                <div class="whatis-body">
                    <div class="whatis-item" v-for="item in items" :v-key="item.name">
                        <div class="item-name" v-html="item.name"></div>
                        <div class="item-text" v-html="item.text" v-if="item.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

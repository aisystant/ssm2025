<script setup lang="ts">
defineProps<{
    title: string,
    text?: string,
    items: {
        name: string
        text: string
    }[],
}>()
</script>

<template>
    <section class="program-objectives">
        <div class="section-row">
            <div class="objectives-head">
                <h2 class="objectives-title" v-html="title"></h2>
                <div v-html="text" v-if="text"></div>
            </div>

            <div class="objectives-body">
                <div class="objectives-item" v-for="item in items" :key="JSON.stringify(item)">
                    <div class="objective-name" v-html="item.name"></div>
                    <div class="objective-text" v-html="item.text"></div>
                </div>
            </div>
        </div>
    </section>
</template>

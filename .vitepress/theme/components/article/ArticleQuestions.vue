<script setup lang="ts">
defineProps<{
    title: string,
    subtitle?: string,
    items: {
        name: string
        selector: string
    }[]
}>()
</script>

<template>
    <div class="article-questions">
        <div class="container">
            <div class="questions-body">
                <div class="mb-4" v-html="subtitle" v-if="subtitle"></div>

                <div class="questions-title" v-html="title"></div>

                <div class="questions-row">
                    <div class="questions-item" v-for="item in items" :key="item.selector">
                        <a
                            :href="item.selector"
                            class="question-card"
                            v-html="item.name">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

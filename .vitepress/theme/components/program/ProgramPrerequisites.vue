<script setup lang="ts">
defineProps<{
    title: string,
    items: string[]
}>()
</script>

<template>
    <section class="program-prerequisites">
        <div class="container">
            <div class="section-row">
                <div class="prerequisites-head">
                    <h2 v-html="title"></h2>
                </div>

                <div class="prerequisites-body">
                    <div class="prerequisites-item" v-for="item in items" :key="JSON.stringify(item)">
                        <div class="prerequisite-card" v-html="item"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

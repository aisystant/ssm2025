<script setup lang="ts">
interface Card {
    name: string
    time: string
}

defineProps<{
    title: string,
    items: {
        meeting: Card
        practice?: Card
    }[],
}>()
</script>

<template>
    <section class="marathon-format">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-row">
            <template v-for="item in items" :key="JSON.stringify(item)">
                <div class="format-item item-first">
                    <div class="format-card">
                        <div class="card-title" v-html="item.meeting.name"></div>
                        <div class="card-text" v-html="item.meeting.time"></div>
                    </div>
                </div>

                <div class="format-item item-second" v-if="item.practice">
                    <div class="format-card">
                        <div class="card-title" v-html="item.practice.name"></div>
                        <div class="card-text" v-html="item.practice.time"></div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

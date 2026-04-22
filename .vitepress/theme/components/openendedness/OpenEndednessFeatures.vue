<script setup lang="ts">
interface Card {
    title: string
    text?: string[]
    list?: string[]
}

defineProps<{
    items: Card[]
}>()
</script>

<template>
    <div class="openendedness-features">
        <div class="container">
            <div class="section-body">
                <div class="section-row">
                    <div class="section-col" v-for="card in items" :key="card.title">
                        <div class="section-card">
                            <div class="card-title" v-html="card.title"></div>

                            <template v-if="card.text">
                                <p v-for="item in card.text" :key="item" v-html="item"></p>
                            </template>

                            <ul class="list-point" v-if="card.list">
                                <li v-for="item in card.list" :key="item" v-html="item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Card {
    name: string
    list: string[]
}

defineProps<{
    title: string,
    text?: string,
    items: Card[],
}>()
</script>

<template>
    <section class="marathon-result">
        <div class="section-row">
            <div class="result-head">
                <h2 class="result-title" v-html="title"></h2>
                <span v-html="text" v-if="text"></span>
            </div>

            <div class="result-body">
                <div class="result-item" v-for="card in items" :key="JSON.stringify(card)">
                    <div class="result-name" v-html="card.name"></div>

                    <div class="result-text">
                        <ul>
                            <li
                                v-for="item in card.list"
                                :key="item"
                                v-html="item"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Card {
    name: string
    style?: string
    list: string[]
}

defineProps<{
    title: string,
    items: Card[],
}>()
</script>

<template>
    <section class="marathon-benefits">
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="section-row">
                <div class="section-col" v-for="card in items" :key="JSON.stringify(card)">
                    <div :class="`benefits-card ${card.style}`">
                        <div class="card-body">
                            <h5 class="card-title" v-html="card.name"></h5>
                            <ul class="benefits-list">
                                <li v-for="item in card.list" :key="item">
                                    <div class="benefits-item" v-html="item"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

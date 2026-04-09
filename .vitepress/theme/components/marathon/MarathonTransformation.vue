<script setup lang="ts">
interface Card {
    before: string
    after: string
    text: string
}

defineProps<{
    title: string,
    items: Card[],
}>()
</script>

<template>
    <section class="marathon-effect">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-row">
            <div class="section-col" v-for="card in items" :key="JSON.stringify(card)">
                <div class="effect-card">
                    <div class="effect-item">
                        <div class="item-state" v-html="card.before"></div>
                    </div>
                    <div class="effect-item">
                        <div class="item-state" v-html="card.after"></div>
                        <div class="item-text" v-html="card.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

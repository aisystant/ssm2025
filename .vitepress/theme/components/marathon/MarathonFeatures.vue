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
    <section class="marathon-receive">
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="section-row">
                <div class="section-col" v-for="card in items" :key="JSON.stringify(card)">
                    <div :class="`section-block ${card.style}`">
                        <p class="lead" v-html="card.name"></p>
                        <ul class="list-point">
                            <template v-for="item in card.list" :key="item">
                                <li v-html="item"></li>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

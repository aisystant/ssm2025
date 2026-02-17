<script setup lang="ts">
interface Card {
    icon: string
    name: string
    list: string[]
}

defineProps<{
    title: string,
    items: Card[],
}>()
</script>

<template>
    <section class="marathon-conditions">
        <div class="section-body">
            <h2 class="section-title" v-html="title"></h2>

            <div class="section-row">
                <div class="section-col" v-for="card in items" :key="JSON.stringify(card)">
                    <div class="condition-card">
                        <div class="card-title">
                            <span :class="card.icon"></span>
                            <span v-html="card.name"></span>
                        </div>

                        <ul class="conditions-list">
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

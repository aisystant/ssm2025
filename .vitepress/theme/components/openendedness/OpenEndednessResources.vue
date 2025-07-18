<script setup lang="ts">
defineProps<{
    title: string,
    cards: {
        name: string
        style: string
        items: string[]
    }[]
}>()
</script>

<template>
    <section class="openendedness-resources">
        <div class="container">
            <div class="section-body">
                <h2 class="section-title" v-html="title"></h2>

                <div class="section-row">
                    <div class="section-col" v-for="card in cards" :v-key="card.name">
                        <div :class="`section-block ${card.style}`">
                            <p class="lead" v-html="card.name"></p>

                            <ul class="list-point">
                                <template v-for="item in card.items" :v-key="item">
                                    <li v-html="item"></li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

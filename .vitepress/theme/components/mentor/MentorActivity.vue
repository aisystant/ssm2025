<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

interface Card {
    head: string
    text?: string
    image: string
    items: {
        name: string
        link: string
    }[]
}

defineProps<{
    title: string,
    cards: Card[],
}>()
</script>

<template>
    <section class="mentor-activity">
        <div class="container">
            <h2 class="section-h2" v-html="title"></h2>

            <div class="section-row">
                <div class="section-col" v-for="card in cards" :key="JSON.stringify(card)">
                    <div class="activity-card">
                        <div class="card-head">
                            <img :src="`/images/${card.image}`" :alt="card.head">
                            <div class="card-title">
                                <h5 v-html="card.head"></h5>
                                <small v-html="card.text" v-if="card.text"></small>
                            </div>
                        </div>

                        <div class="card-body">
                            <ul class="activity-list">
                                <li v-for="item in card.items" :key="JSON.stringify(item)">
                                    <a class="activity-item" :href="item.link.trim()" v-if="item.link">
                                        {{ item.name }}
                                        <SvgIcon name="chevron-right" />
                                    </a>

                                    <span class="activity-item" v-else>
                                        {{ item.name }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

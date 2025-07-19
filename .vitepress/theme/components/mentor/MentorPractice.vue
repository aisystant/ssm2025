<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from '../../composables/media'

const { isDekstop } = useDisplay()

interface Card {
    head: string
    items: {
        name: string
        status?: string
        style?: string
    }[]
}

const props = defineProps<{
    title: string,
    cards: Card[],
}>()

const showImage = computed(() => {
    return (idx: number) => {
        if (!isDekstop.value) return false
        if (props.cards.length === 1 || idx % 2 === 1) return true
        return false
    }
})
</script>

<template>
    <section class="mentor-practice">
        <div class="container">
            <h2 class="section-h2" v-html="title"></h2>

            <div class="section-row">
                <template v-for="(card, i) in cards" :key="JSON.stringify(card)">
                    <div class="section-image" v-if="showImage(i)">
                        <div class="practice-picture"></div>
                    </div>

                    <div class="section-col">
                        <div class="practice-card">
                            <div class="card-body">
                                <h5 class="card-title" v-html="card.head"></h5>
                                <ul class="practice-list">
                                    <li v-for="item in card.items" :key="JSON.stringify(item)">
                                        <div class="practice-item">
                                            <span :class="`status ${item.style}`" v-if="item.status">
                                                {{ item.status }}
                                            </span>
                                            {{ item.name }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

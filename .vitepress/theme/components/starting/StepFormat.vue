<script setup lang="ts">
interface Card {
    style?: string
    head?: string
    name: string
    text?: string
    button: Button
    price?: {
        cost: string
        text?: string
    }[]
}

interface Button {
    name: string
    link: string
    style?: string
}

defineProps<{
    title: string,
    items: Card[]
}>()
</script>

<template>
    <section class="step-section">
        <div class="step-body">
            <h2 class="step-title" v-html="title"></h2>

            <div class="step-format">
                <div class="format-item" v-for="card in items" :key="card.name">
                    <div :class="`format-card ${card.style ?? undefined}`">
                        <div class="card-head">
                            {{ card.head }}
                        </div>

                        <div class="card-body">
                            <div class="card-title" v-html="card.name"></div>
                            <div class="card-text" v-html="card.text" v-if="card.text"></div>

                            <div class="card-price">
                                <p class="fw-semibold">Стоимость</p>

                                <p v-for="item in card.price" :key="JSON.stringify(item)">
                                    <span class="text-secondary fs-5" v-html="item.cost"></span>
                                    <small v-html="item.text" v-if="item.text"></small>
                                </p>
                            </div>

                            <div class="card-button">
                                <a
                                    :href="card.button.link.trim()"
                                    :class="`btn ${card.button.style || 'btn-outline'}`">
                                    {{ card.button.name }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

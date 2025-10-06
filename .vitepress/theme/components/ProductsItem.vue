<script setup lang="ts">
import { formatPrice, formatMonthDay } from '../composables/format'

interface Card {
    name: string
    price: string
    text?: string
    link: string
}

defineProps<{
    idx: number,
    title: string,
    items: Card[],
    more?: {
        name: string
        link: string
    }
}>()
</script>

<template>
    <div class="products__item">
        <div class="product-head" data-bs-toggle="collapse" :data-bs-target="`#product${idx}`" role="button">
            <h4 class="product-name" v-html="title"></h4>
        </div>

        <div class="collapse" :id="`product${idx}`">
            <div class="product-body">
                <div class="product-card" v-for="item in items" :key="item.name">
                    <div class="card-body">
                        <div class="card-name" v-html="item.name"></div>
                        <div class="card-text" v-if="item.text">
                            {{ formatMonthDay(item.text) }}
                        </div>
                    </div>

                    <div class="card-buy">
                        <div class="card-price">
                            {{ formatPrice(item.price) }}
                        </div>
                        <div class="card-button">
                            <a
                                :href="item.link.trim()"
                                class="btn"
                                target="_blank"
                                rel="nofollow noopener">
                                Купить
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-footer" v-if="more">
            <a :href="more.link.trim()">{{ more.name }}</a>
        </div>
    </div>
</template>

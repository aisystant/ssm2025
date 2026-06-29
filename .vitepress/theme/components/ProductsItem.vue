<script setup lang="ts">
import { ref } from 'vue'
import { formatPrice, formatMonthDay } from '../composables/format'
import { PaymentLinks } from './../interfaces'
import SMPayment from './payment/SMPayment.vue'
import SMInfoModal from './layout/SMInfoModal.vue'

interface Card {
    name: string
    price: string
    text?: string
    paylink: PaymentLinks
    info?: {
        name: string
        path: string
    }
}

defineProps<{
    idx: number,
    title: string,
    items?: Card[],
    text?: string[],
    more?: {
        name: string
        link: string
        target?: string
    }
}>()

const info = ref('')
const modal = ref(false)
const openModal = (path: string) => {
    if (!path) return
    info.value = path
    modal.value = true
}
</script>

<template>
    <div class="products__item">
        <div
            class="product-head"
            data-bs-toggle="collapse"
            :data-bs-target="`#product${idx}`"
            role="button"
            v-if="items">
            <h4
                class="product-name"
                v-html="title">
            </h4>
        </div>

        <div class="product-head" v-else>
            <h4
                class="product-name"
                v-html="title">
            </h4>
        </div>

        <div class="collapse" :id="`product${idx}`" v-if="items">
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
                        <div class="card-button" v-if="item.paylink">
                            <SMPayment
                            :rus="item.paylink.rus"
                            :foreign="item.paylink.foreign ?? undefined"
                            v-if="item.paylink.rus" />
                        </div>
                        <div class="card-button" v-else-if="item.info">
                            <button
                                class="btn"
                                @click="openModal(item.info.path)">
                                {{ item.info.name }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-footer" v-if="more || text">
            <template v-if="text">
                <p v-for="item in text" :key="item" v-html="item"></p>
            </template>

            <a
                :href="more.link.trim()"
                :target="more.target ?? undefined"
                v-if="more">
                {{ more.name }}
            </a>
        </div>
    </div>

    <SMInfoModal
    :path="info"
    @close="modal = false"
    v-if="modal" />
</template>

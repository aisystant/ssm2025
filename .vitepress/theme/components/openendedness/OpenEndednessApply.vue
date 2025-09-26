<script setup lang="ts">
import { formatPrice } from '../../composables/format'

defineProps<{
    title: string,
    subtitle?: string,
    items: {
        name: string
        price: string
        text?: string
    }[],
    checks?: string[],
    footer: {
        button: string
        link: string
        text?: string
    }
}>()
</script>

<template>
    <section class="openendedness-apply" id="apply">
        <div class="section-row">
            <div class="section-body">
                <h2 class="section-title" v-html="title"></h2>
                <div class="section-subtitle" v-html="subtitle" v-if="subtitle"></div>

                <div class="pricing-plan">
                    <ul>
                        <li v-for="item in items" :v-key="item.name">
                            <span class="name" v-html="item.name"></span>
                            <span class="price">
                                {{ formatPrice(item.price) }}
                                <small>{{ item.text }}</small>
                            </span>
                        </li>
                    </ul>
                </div>

                <ul class="check-list" v-if="checks">
                    <template v-for="item in checks" :v-key="item">
                        <li v-html="item"></li>
                    </template>
                </ul>

                <div class="section-footer">
                    <a
                        :href="footer.link.trim()"
                        class="btn"
                        target="_blank"
                        rel="nofollow">
                        {{ footer.button }}
                    </a>

                    <div v-html="footer.text" v-if="footer.text"></div>
                </div>
            </div>
        </div>
    </section>
</template>

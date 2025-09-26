<script setup lang="ts">
import { Button } from '../../interfaces'

defineProps<{
    title: string,
    items: {
        head: string
        style?: string
        button: Button
    }[],
    footer?: string
}>()
</script>

<template>
    <section class="about-contacts">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-row">
            <template v-for="item in items" :key="item.head">
                <div :class="`contacts-item ${item.style ?? undefined}`">
                    <div class="contact-name" v-html="item.head"></div>

                    <a
                        :href="item.button.link.trim()"
                        :class="`btn ${item.button.style || 'btn-dark'}`"
                        :target="item.button.target ?? undefined"
                        :rel="item.button.rel ?? undefined">
                        {{ item.button.name }}
                    </a>
                </div>
            </template>
        </div>

        <div class="section-footer" v-html="footer" v-if="footer"></div>
    </section>
</template>

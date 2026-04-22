<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

defineProps<{
    title: string,
    subtitle?: string,
    items: {
        icon: string
        text: string
        name?: string
    }[]
}>()
</script>

<template>
    <section class="openendedness-components">
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>
            <div class="section-subtitle" v-html="subtitle" v-if="subtitle"></div>

            <div class="section-row">
                <ul class="components-list">
                    <li v-for="item in items" :key="item.icon">
                        <SvgIcon :name="item.icon" />
                        <div>
                            <div class="fw-semibold mb-1" v-html="item.name" v-if="item.name"></div>
                            <span v-html="item.text"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

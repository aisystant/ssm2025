<script setup lang="ts">
import SvgIcon from './../SvgIcon.vue'

defineProps<{
    title: string,
    head: string,
    items: {
        name: string
        text?: string
    }[]
}>()
</script>

<template>
    <section class="about-purpose">
        <div class="container">
            <div class="section-row">
                <h2 class="section-title" v-html="title"></h2>

                <div class="purpose-row">
                    <div class="purpose-head">
                        <div class="purpose-title">
                            <SvgIcon name="brain" />
                            {{ head }}
                        </div>
                    </div>
                </div>

                <div class="purpose-row">
                    <div class="purpose-item" v-for="item in items" :key="item.name">
                        <div class="purpose-card">
                            <div class="card-title" v-html="item.name"></div>
                            <div class="card-text" v-html="item.text" v-if="item.text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

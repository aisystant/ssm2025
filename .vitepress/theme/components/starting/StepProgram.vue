<script setup lang="ts">
import SvgIcon from './../SvgIcon.vue'

defineProps<{
    title: string,
    items: {
        icon: string
        head: string
        text?: string
        link: string
    }[]
}>()
</script>

<template>
    <section class="step-section">
        <div class="step-body">
            <h2 class="step-title" v-html="title"></h2>

            <div class="step-program">
                <div class="program-item" v-for="item in items" :key="JSON.stringify(item)">
                    <div class="card-head">
                        <SvgIcon :name="item.icon" />
                        <span v-html="item.head"></span>
                    </div>

                    <div class="card-text" v-html="item.text" v-if="item.text"></div>

                    <div class="card-button">
                        <a :href="item.link.trim()" class="btn btn-accent">
                            О программе
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

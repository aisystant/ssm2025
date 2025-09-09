<script setup lang="ts">
import SvgIcon from './../SvgIcon.vue'
import { ButtonIcon } from '../../interfaces'

defineProps<{
    title: string,
    items: {
        text: string
        sources: ButtonIcon[]
    }[]
}>()
</script>

<template>
    <section class="step-section">
        <div class="step-body">
            <h2 class="step-title" v-html="title"></h2>

            <div class="step-information">
                <div class="info-item" v-for="item in items" :key="JSON.stringify(item)">
                    <div class="info-text" v-html="item.text"></div>

                    <template v-for="source in item.sources" :key="source.name">
                        <a
                            :href="source.link.trim()"
                            class="list-item"
                            target="_blank">
                            <SvgIcon :name="source.icon" />
                            {{ source.name }}
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

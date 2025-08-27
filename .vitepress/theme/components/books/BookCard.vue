<script setup lang="ts">
import IconLink from '../ambassador/IconLink.vue'
import BookModal from './BookModal.vue'
import { ref } from 'vue'

interface Button {
    icon: string
    name: string
    link: string
}

defineProps<{
    id: string,
    title: string,
    text?: string,
    image: string,
    author?: string,
    buttons?: Button[],
}>()

const isOpen = ref(false)
</script>

<template>
    <div class="book-card">
        <div @click="isOpen = true" role="button">
            <div class="card-image">
                <img :src="`/images/${image}`" :alt="title">
            </div>

            <div class="card-title">
                {{ title }}
            </div>

            <div class="card-text" v-html="text" v-if="text"></div>
            <div class="book-author" v-html="author" v-if="author"></div>
        </div>

        <div class="card-footer" v-if="buttons">
            <IconLink
            v-for="item in buttons"
            :key="item.name"
            :name="item.name"
            :icon="item.icon"
            :link="item.link" />
        </div>
    </div>

    <BookModal
    :path="id"
    :title="title"
    :text="text"
    :image="image"
    :author="author"
    :buttons="buttons"
    @close="isOpen = false"
    v-if="isOpen" />
</template>

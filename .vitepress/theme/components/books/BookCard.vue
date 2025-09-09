<script setup lang="ts">
import IconLink from '../IconLink.vue'
import BookModal from './BookModal.vue'
import { Book } from '../../interfaces'
import { ref } from 'vue'

defineProps<{
    path: string,
    book: Book,
}>()

const isOpen = ref(false)
</script>

<template>
    <div class="book-card">
        <div @click="isOpen = true" role="button">
            <div class="card-image">
                <img :src="`/images/${book.image}`" :alt="book.title">
            </div>

            <div class="card-title">{{ book.title }}</div>
            <div class="card-text" v-html="book.text" v-if="book.text"></div>
            <div class="book-author" v-html="book.author" v-if="book.author"></div>
        </div>

        <div class="card-footer" v-if="book.buttons">
            <IconLink
            v-for="item in book.buttons"
            :key="item.name"
            :name="item.name"
            :icon="item.icon"
            :link="item.link" />
        </div>
    </div>

    <BookModal
    :path="path"
    :book="book"
    @close="isOpen = false"
    v-if="isOpen" />
</template>

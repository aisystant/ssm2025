<script setup lang="ts">
import BookCard from '../books/BookCard.vue'
import MoreInClub from '../MoreInClub.vue'
import { useData } from '../../composables/data'
import { bookCards } from './../../support/books'

const { frontmatter } = useData()
const books = bookCards
</script>

<template>
    <div class="books">
        <div class="page-header">
            <h1 class="page-title">{{ frontmatter.title }}</h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="books-row" v-if="books.length">
            <div class="books-item" v-for="book in books" :key="book.id">
                <BookCard
                :id="book.id"
                :title="book.title"
                :text="book.text"
                :image="book.image"
                :author="book.author"
                :buttons="book.buttons" />
            </div>
        </div>
    </div>

    <MoreInClub />
</template>

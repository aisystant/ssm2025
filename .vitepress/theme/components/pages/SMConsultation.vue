<script setup lang="ts">
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header text-wrap">
            <h1 class="page-title" v-html="frontmatter.title"></h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="text-content">
            <figure class="blockquote-figure" v-if="frontmatter.blockquote">
                <blockquote class="blockquote" v-html="frontmatter.blockquote.text"></blockquote>
                <figcaption class="blockquote-footer" v-html="frontmatter.blockquote.author"></figcaption>
            </figure>

            <Content />
        </div>
    </div>

    <div class="calendar" v-if="frontmatter.calendar">
        <div class="calendar__body">
            <div class="section-row">
                <div class="section-col">
                    <h3 class="calendar-title" v-html="frontmatter.calendar.title"></h3>
                    <a
                        :href="frontmatter.calendar.link.trim()"
                        class="btn"
                        target="_blank"
                        rel="nofollow noopener">
                        {{ frontmatter.calendar.button }}
                    </a>
                </div>

                <div class="section-col py-0">
                    <div class="calendar-image">
                        <img :src="`/images/${frontmatter.calendar.image}`">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
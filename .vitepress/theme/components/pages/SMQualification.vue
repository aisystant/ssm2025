<script setup lang="ts">
import QualificationLevels from './../QualificationLevels.vue'
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header">
            <h1 class="page-title" v-html="frontmatter.title"></h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="text-content">
            <Content />
        </div>
    </div>

    <QualificationLevels />

    <section class="section-light" v-if="frontmatter.awarded">
        <div class="container">
            <h2 v-html="frontmatter.awarded.title"></h2>
            <img :src="`/images/${frontmatter.awarded.image}`" :alt="frontmatter.awarded.title" class="w-100">
        </div>
    </section>

    <div class="cert-check" v-if="frontmatter.checking">
        <div class="cert-check__text" v-html="frontmatter.checking.text"></div>
        <a
            :href="frontmatter.checking.link.trim()"
            class="btn"
            target="_blank"
            rel="nofollow">
            {{ frontmatter.checking.button }}
        </a>
    </div>

    <ContactUs />
</template>

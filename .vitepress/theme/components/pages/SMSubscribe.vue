<script setup lang="ts">
import SubscribeForm from './../SubscribeForm.vue'
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
            <Content />
        </div>
    </div>

    <section class="benefits-subscribe">
        <div class="container">
            <div class="benefits-body">
                <h3 v-html="frontmatter.section.title"></h3>

                <div class="section-row" v-if="frontmatter.section.cards">
                    <div class="section-col" v-for="item in frontmatter.section.cards" :key="JSON.stringify(item)">
                        <div class="simple-card">
                            <img :src="`/images/${item.image}`">
                            <div class="card-body" v-html="item.text"></div>
                        </div>
                    </div>
                </div>

                <div class="benefits-footer" v-html="frontmatter.section.footer" v-if="frontmatter.section.footer"></div>
            </div>
        </div>
    </section>

    <SubscribeForm />
</template>

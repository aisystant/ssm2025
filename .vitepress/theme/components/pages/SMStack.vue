<script setup lang="ts">
import StackPractices from './../StackPractices.vue'
import CallToAction from './../CallToAction.vue'
import AnyQuestions from './../AnyQuestions.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header">
            <h1 class="page-title">{{ frontmatter.title }}</h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="text-content">
            <Content />
        </div>
    </div>

    <StackPractices
    :head="stack.head"
    :text="stack.text"
    :items="stack.items"
    :style="stack.style"
    v-for="stack in frontmatter.stacks" :key="stack.head" />

    <CallToAction
    :title="frontmatter.action.title"
    :buttons="frontmatter.action.buttons"
    :text="frontmatter.action.text"
    v-if="frontmatter.action" />

    <AnyQuestions />
</template>

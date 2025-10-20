<script setup lang="ts">
import ArticleHeader from './../article/ArticleHeader.vue'
import ArticleAuthor from './../article/ArticleAuthor.vue'
import ArticleQuestions from './../article/ArticleQuestions.vue'
import ArticleFooter from './../article/ArticleFooter.vue'
import QuizInvites from '../quiz/QuizInvites.vue'
import MoreInClub from '../MoreInClub.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <article class="article">
        <ArticleHeader
        :title="frontmatter.title"
        :subtitle="frontmatter.subtitle" />

        <ArticleAuthor
        :image="frontmatter.author.image"
        :name="frontmatter.author.name"
        :text="frontmatter.author.text"
        :link="frontmatter.author.link"
        v-if="frontmatter.author" />

        <ArticleQuestions
        :title="frontmatter.questions.title"
        :subtitle="frontmatter.questions.subtitle"
        :items="frontmatter.questions.items"
        v-if="frontmatter.questions" />

        <div class="article__body">
            <div class="text-wrap">
                <Content />
            </div>
        </div>

        <ArticleFooter />
    </article>

    <template v-if="frontmatter.quiz">
        <QuizInvites
        v-for="name in frontmatter.quiz"
        :key="name"
        :name="name" />
    </template>

    <MoreInClub />
</template>

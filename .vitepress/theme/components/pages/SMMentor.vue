<script setup lang="ts">
import { computed } from 'vue'
import MentorIntro from './../mentor/MentorIntro.vue'
import MentorActivity from './../mentor/MentorActivity.vue'
import MentorPractice from './../mentor/MentorPractice.vue'
import MentorContacts from './../mentor/MentorContacts.vue'
import MentorReviews from './../mentor/MentorReviews.vue'
import CardSwiper from './../CardSwiper.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()

const name = computed(() => {
    return `${frontmatter.value.name} ${frontmatter.value.surname}`
})
</script>

<template>
    <MentorIntro
    :name="name"
    :description="frontmatter.description"
    :image="frontmatter.image"
    :roles="frontmatter.roles"
    :thesis="frontmatter.thesis" />

    <MentorActivity
    :title="frontmatter.activity.title"
    :cards="frontmatter.activity.cards"
    v-if="frontmatter.activity" />

    <MentorPractice
    :title="frontmatter.practice.title"
    :cards="frontmatter.practice.cards"
    v-if="frontmatter.practice" />

    <CardSwiper
    :data="frontmatter.publications"
    :dark="true"
    v-if="frontmatter.publications" />

    <MentorContacts
    :name="name"
    :club="frontmatter.contacts.club"
    :telegram="frontmatter.contacts.telegram"
    :email="frontmatter.contacts.email"
    :social="frontmatter.contacts.social"
    v-if="frontmatter.contacts" />

    <div class="show-more">
        <a href="/team/" class="btn">Другие мастера</a>
    </div>

    <MentorReviews
    :title="frontmatter.reviews.title"
    :items="frontmatter.reviews.items"
    v-if="frontmatter.reviews" />
</template>

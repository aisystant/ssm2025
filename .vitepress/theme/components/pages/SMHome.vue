<script setup lang="ts">
import HomeIntro from './../HomeIntro.vue'
import FeatureSwiper from './../FeatureSwiper.vue'
import CardSwiper from './../CardSwiper.vue'
import EducationItems from './../EducationItems.vue'
import ProgramList from './../ProgramList.vue'
import SubscribeForm from './../SubscribeForm.vue'
import TeamCards from './../TeamCards.vue'
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <HomeIntro
    :title="frontmatter.intro.title"
    :image="frontmatter.intro.image"
    :text="frontmatter.intro.text"
    :buttons="frontmatter.intro.buttons"
    v-if="frontmatter.intro" />

    <FeatureSwiper
    :data="frontmatter.features"
    v-if="frontmatter.features" />

    <section class="container" id="programs">
        <ProgramList />
    </section>

    <CardSwiper
    :data="frontmatter.swiper1"
    :dark="true"
    v-if="frontmatter.swiper1" />

    <EducationItems
    :title="frontmatter.education.title"
    :items="frontmatter.education.items"
    v-if="frontmatter.education" />

    <CardSwiper
    :data="frontmatter.swiper2"
    :dark="true"
    v-if="frontmatter.swiper2" />

    <CardSwiper
    :data="frontmatter.swiper3"
    v-if="frontmatter.swiper3" />

    <CardSwiper
    :data="frontmatter.swiper4"
    v-if="frontmatter.swiper4" />

    <SubscribeForm v-if="false" />

    <section class="team-section">
        <h2 class="section-title" v-html="frontmatter.team.title"></h2>
        <div class="section-subtitle"
            v-html="frontmatter.team.subtitle"
            v-if="frontmatter.team.subtitle">
        </div>
        <TeamCards />
    </section>

    <ContactUs />
</template>

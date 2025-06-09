<script setup lang="ts">
import FeatureSwiper from './../FeatureSwiper.vue'
import CardSwiper from './../CardSwiper.vue'
import ProgramList from './../ProgramList.vue'
import SubscribeForm from './../SubscribeForm.vue'
import TeamCards from './../TeamCards.vue'
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <section class="intro" v-if="frontmatter.intro">
        <div class="container">
            <div class="intro__body">
                <div class="intro__col">
                    <div class="intro-text">
                        <h1 class="intro-title" v-html="frontmatter.intro.title"></h1>
                        <div class="row g-3" v-if="frontmatter.intro.text">
                            <template v-for="item in frontmatter.intro.text" :key="JSON.stringify(item)">
                                <div class="col-md-6 col-lg-12" v-html="item"></div>
                            </template>
                        </div>
                    </div>
                    <div class="intro-buttons" v-if="frontmatter.intro.buttons">
                        <template v-for="button in frontmatter.intro.buttons" :key="JSON.stringify(button)">
                            <a :href="button.link" :class="`btn ${button.style}`">
                                {{ button.name }}
                            </a>
                        </template>
                    </div>
                </div>
                <div class="intro__col">
                    <img :src="`/images/${frontmatter.intro.image}`" class="intro-image" alt="Программы обучения">
                </div>
            </div>
        </div>
    </section>

    <FeatureSwiper :data="frontmatter.features" v-if="frontmatter.features" />

    <section class="container">
        <ProgramList />
    </section>

    <CardSwiper :data="frontmatter.swiper1" :dark="true" />

    <section class="education-section" v-if="frontmatter.education">
        <div class="container">
            <h2 class="section-title" v-html="frontmatter.education.title"></h2>
            <div class="section-row" v-if="frontmatter.education.items">
                <div class="section-col" v-for="item in frontmatter.education.items" :key="JSON.stringify(item)">
                    <div class="education-item">
                        <img :src="`/images/${item.image}`" :alt="item.button">
                        <div class="card-text" v-html="item.text"></div>
                        <a :href="item.link" class="btn">
                            {{ item.button }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <CardSwiper :data="frontmatter.swiper2" :dark="true" />
    <CardSwiper :data="frontmatter.swiper3" />
    <CardSwiper :data="frontmatter.swiper4" />

    <SubscribeForm />

    <section class="team-section">
        <h2 class="section-title" v-html="frontmatter.team.title"></h2>
        <div class="section-subtitle" v-html="frontmatter.team.subtitle" v-if="frontmatter.team.subtitle"></div>
        <TeamCards />
    </section>

    <ContactUs />
</template>

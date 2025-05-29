<script setup lang="ts">
import CardSwiper from './../CardSwiper.vue'
import ProgramCard from './../ProgramCard.vue'
import SubscribeForm from './../SubscribeForm.vue'
import TeamCards from './../TeamCards.vue'
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="programs-section" v-if="frontmatter.programs">
        <div class="section-row">
            <div class="section-col" v-for="program in frontmatter.programs" :key="JSON.stringify(program)">
                <div class="program-item">
                    <a :href="`#${program.id}`" class="btn">
                        {{ program.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>

    <CardSwiper :data="frontmatter.swiper1" :dark="true" />

    <ProgramCard id="selfdev" />
    <ProgramCard id="orgdev" />

    <div class="education-section" v-if="frontmatter.education">
        <div class="section-row">
            <div class="section-col" v-for="item in frontmatter.education" :key="JSON.stringify(item)">
                <div class="education-item">
                    <a :href="item.link" class="btn">
                        {{ item.button }}
                    </a>
                    <div class="card-text" v-html="item.text"></div>
                </div>
            </div>
        </div>
    </div>

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

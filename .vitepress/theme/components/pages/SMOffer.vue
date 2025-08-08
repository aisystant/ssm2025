<script setup lang="ts">
import OfferCard from './../offer/OfferCard.vue'
import OfferParticipants from './../offer/OfferParticipants.vue'
import OfferPrograms from './../offer/OfferPrograms.vue'
import OfferContacts from './../offer/OfferContacts.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header text-wrap">
            <h1 class="page-title" v-html="frontmatter.title"></h1>
        </div>

        <div class="text-content">
            <template v-if="frontmatter.part1">
                <template v-for="item in frontmatter.part1" :key="item">
                    <p v-html="item"></p>
                </template>
            </template>

            <OfferCard
            :title="frontmatter.offer.title"
            :button="frontmatter.offer.button"
            :text="frontmatter.offer.text"
            :footer="frontmatter.offer.footer"
            v-if="frontmatter.offer" />

            <template v-if="frontmatter.part2">
                <template v-for="item in frontmatter.part2" :key="item">
                    <p v-html="item"></p>
                </template>
            </template>
        </div>
    </div>

    <OfferParticipants
    :title="frontmatter.participants.title"
    :items="frontmatter.participants.items"
    v-if="frontmatter.participants" />

    <div class="page__content" v-if="frontmatter.part3">
        <div class="text-content">
            <template v-for="item in frontmatter.part3" :key="item">
                <p v-html="item"></p>
            </template>
        </div>
    </div>

    <OfferPrograms
    :title="frontmatter.programs.title"
    :items="frontmatter.programs.items"
    v-if="frontmatter.programs" />

    <div class="page__content" v-if="frontmatter.part4">
        <div class="text-content">
            <template v-for="item in frontmatter.part4" :key="item">
                <p v-html="item"></p>
            </template>
        </div>
    </div>

    <OfferContacts
    :title="frontmatter.contacts.title"
    :text="frontmatter.contacts.text"
    :email="frontmatter.contacts.email"
    :telegram="frontmatter.contacts.telegram"
    :items="frontmatter.contacts.cards"
    v-if="frontmatter.contacts" />
</template>

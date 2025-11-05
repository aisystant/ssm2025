<script setup lang="ts">
import ContactsCard from './../ContactsCard.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="page__content">
        <div class="page-header">
            <h1 class="page-title" v-html="frontmatter.pagetitle ?? frontmatter.title"></h1>
        </div>

        <div class="contacts-section">
            <div class="contacts-row">
                <div class="col-lg-7 col-xl-8">
                    <ContactsCard
                    :items="[frontmatter.main, frontmatter.address]" />
                </div>

                <div class="col-lg-5 col-xl-4">
                    <div class="contacts-row">
                        <div class="col-12">
                            <ContactsCard
                            :items="[frontmatter.connect]" />
                        </div>

                        <div class="col-12">
                            <ContactsCard
                            :items="[frontmatter.english]" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 col-xl-8">
                    <ContactsCard
                    :items="[frontmatter.legal]" />
                </div>

                <div class="col-lg-5 col-xl-4">
                    <ContactsCard
                    :items="[frontmatter.requisites]" />
                </div>
            </div>
        </div>
    </div>

    <section class="contacts-channels" v-if="frontmatter.community">
        <div class="container">
            <h2 class="contacts-title" v-html="frontmatter.community.title"></h2>

            <div class="section-body">
                <div class="contacts-row">
                    <div class="col-12">
                        <ContactsCard
                        :items="[frontmatter.community.channels]" />
                    </div>

                    <div class="col-lg-6">
                        <ContactsCard
                        :items="[frontmatter.community.aisystant]" />
                    </div>

                    <div class="col-lg-6">
                        <ContactsCard
                        :items="[frontmatter.community.chats]" />
                    </div>

                    <div class="col-12">
                        <ContactsCard
                        :items="[frontmatter.community.bots]" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contacts-programs" v-if="frontmatter.programs">
        <h2 class="contacts-title" v-html="frontmatter.programs.title"></h2>

        <div class="contacts-row">
            <div class="col-lg-4" v-for="item in frontmatter.programs.items" :key="JSON.stringify(item)">
                <ContactsCard
                :items="[item]" />
            </div>
        </div>
    </section>
</template>

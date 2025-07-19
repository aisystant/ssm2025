<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import FeedbackForm from './FeedbackForm.vue'

import yamlText from '../../../components/contactus.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    text: string
    items: string[]
    footer?: string
    btn_bot?: string
    link_bot?: string
    btn_modal: string
    btn_cons?: string
    link_cons?: string
    btn_support?: string
    link_support?: string
}
</script>

<template>
    <section class="feedback">
        <div class="feedback__body">
            <div class="section-row">
                <div class="section-col">
                    <div class="feedback__invite">
                        <h2 class="section-title" v-html="data.title"></h2>
                        <p class="mb-2" v-html="data.text"></p>
                        <ul>
                            <template v-for="item in data.items" :key="JSON.stringify(item)">
                                <li v-html="item"></li>
                            </template>
                        </ul>
                        <div class="lead" v-html="data.footer" v-if="data.footer"></div>
                    </div>
                </div>

                <div class="section-col">
                    <a :href="data.link_bot.trim()" class="btn" target="_blank" v-if="data.link_bot && data.btn_bot">
                        <SvgIcon name="tg-outline" />
                        {{ data.btn_bot }}
                    </a>

                    <a :href="data.link_support.trim()" class="btn" target="_blank" v-if="data.link_support && data.btn_support">
                        <SvgIcon name="tg-outline" />
                        {{ data.btn_support }}
                    </a>

                    <button class="btn" data-bs-toggle="modal" data-bs-target="#feedback" v-if="false">
                        <SvgIcon name="tg-outline" />
                        {{ data.btn_modal }}
                    </button>

                    <a :href="data.link_cons?.trim()" class="btn" v-if="data.btn_cons && data.link_cons">
                        {{ data.btn_cons }}
                    </a>
                </div>
            </div>
        </div>
    </section>
    <FeedbackForm v-if="false" />
</template>

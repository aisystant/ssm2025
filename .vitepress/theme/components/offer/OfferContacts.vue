<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

defineProps<{
    title: string,
    text?: string,
    email?: string,
    telegram?: string,
    items?: string[],
}>()
</script>

<template>
    <section class="offer-contacts">
        <div class="section-row">
            <div class="section-head">
                <div class="contact-head">
                    <h2 v-html="title"></h2>

                    <div class="card-text" v-html="text" v-if="text"></div>

                    <div class="card-link" v-if="email">
                        <a :href="`mailto:${email.trim()}`">
                            <SvgIcon name="at-sign" />
                            {{ email }}
                        </a>
                    </div>

                    <div class="card-footer" v-if="telegram">
                        <a :href="telegram.trim()" class="btn" target="_blank">
                            <SvgIcon name="tg-outline" />
                            Написать в Телеграм
                        </a>
                    </div>
                </div>
            </div>

            <div class="section-body" v-if="items">
                <template v-for="item in items" :key="item">
                    <div class="contact-card" v-html="item"></div>
                </template>
            </div>
        </div>
    </section>
</template>

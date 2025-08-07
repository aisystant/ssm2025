<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

defineProps<{
    name: string,
    club?: string,
    telegram?: string,
    email?: string,
    social?: {
        name: string
        link: string
    }[]
}>()
</script>

<template>
    <section class="mentor-contacts">
        <div class="section-row">
            <div class="section-col">
                <div class="contacts-body">
                    <h2 class="card-title">Контакты и взаимодействие</h2>

                    <div class="card-text">
                        <p v-if="club">
                            <a :href="club.trim()" target="_blank">
                                <SvgIcon name="club" />
                                {{ name }}
                            </a>
                        </p>
                        <p v-if="email">
                            <a :href="`mailto:${email.trim()}`">
                                <SvgIcon name="at-sign" />
                                {{ email }}
                            </a>
                        </p>
                    </div>
                    <div class="card-footer" v-if="telegram">
                        <a :href="telegram.trim()" class="btn" target="_blank">
                            <SvgIcon name="tg-outline" />
                            Написать в Телеграм
                        </a>
                    </div>
                </div>
            </div>

            <div class="section-col">
                <div class="contact-card" v-if="social">
                    <div class="card-title">
                        Ссылки на активные пространства
                    </div>
                    <div class="card-text">
                        <ul class="contacts-list">
                            <li v-for="item in social" :key="JSON.stringify(item)">
                                <a :href="item.link.trim()" target="_blank" rel="nofollow">
                                    {{ item.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

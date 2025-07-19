<script setup lang="ts">
import { useData } from '../../composables/data'
import SMLogo from './SMLogo.vue'
import SMSocial from './SMSocial.vue'

const { theme } = useData()
const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer" id="footer">
        <div class="footer__container">
            <div class="footer__row">
                <div class="footer__logo">
                    <a href="/">
                        <SMLogo />
                    </a>
                </div>

                <div class="footer__contacts">
                    <div class="mb-3">
                        <p class="fw-semibold mb-1">Адрес:</p>
                        <span v-html="theme.contacts.address"></span>
                    </div>
                    <div class="mt-2">
                        <a :href="theme.contacts.telegram" class="fw-semibold" target="_blank">Telegram</a> — менеджер
                    </div>
                    <div class="mt-2">
                        <a :href="`mailto:${theme.contacts.email}`" class="fw-semibold">{{ theme.contacts.email }}</a>
                    </div>
                </div>

                <div class="footer__media">
                    <SMSocial />
                    <div class="footer-copyright">
                        &copy; {{ theme.siteTitle }}, {{ year }}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useData } from '../../composables/data'
import SMLogo from './SMLogo.vue'
import SMSocial from './SMSocial.vue'
import SMFooterContacts from './SMFooterContacts.vue'

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
                    <SMFooterContacts
                    :contacts="theme.contacts"
                    v-if="theme.contacts" />
                </div>

                <div class="footer__media">
                    <SMSocial
                    :items="theme.socialLinks"
                    v-if="theme.socialLinks" />

                    <div class="footer-copyright">
                        &copy; {{ theme.siteTitle }}, {{ year }}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

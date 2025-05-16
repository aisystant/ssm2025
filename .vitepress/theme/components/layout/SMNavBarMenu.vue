<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SMLogo from './SMLogo.vue'
import SMSocial from './SMSocial.vue'
import SMNavBarMenuLink from './SMNavBarMenuLink.vue'
import SMNavBarMenuGroup from './SMNavBarMenuGroup.vue'
import bootstrap from 'bootstrap/js/dist/offcanvas'
import { useData } from '../../composables/data'

const { theme } = useData()
const Offcanvas = bootstrap.default || bootstrap
const navMenu = ref<HTMLElement | null>(null)
const offcanvasInstance = ref<Offcanvas | null>(null)

onMounted(() => {
    if (typeof window !== 'undefined' && navMenu.value) {
        offcanvasInstance.value = new Offcanvas(navMenu.value)
    }
})
</script>

<template>
    <button class="navbar-toggler" type="button" @click="offcanvasInstance?.toggle()">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-menu offcanvas-xl" ref="navMenu" tabindex="-1">
        <div class="offcanvas-header">
            <div class="offcanvas-title">
                <SMLogo />
            </div>
            <button type="button" class="btn-close" @click="offcanvasInstance?.hide()"></button>
        </div>

        <div class="offcanvas-body">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="item in theme.nav" :key="JSON.stringify(item)">
                    <SMNavBarMenuLink v-if="'link' in item" :item="item" />
                    <SMNavBarMenuGroup v-else :text="item.text" :items="item.items" />
                </li>
            </ul>
        </div>

        <div class="offcanvas-footer">
            <SMSocial />
        </div>
    </div>
</template>

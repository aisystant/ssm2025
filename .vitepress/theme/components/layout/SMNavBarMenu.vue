<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SMLogo from './SMLogo.vue'
import SMSocial from './SMSocial.vue'
import SMNavBarMenuLink from './SMNavBarMenuLink.vue'
import SMNavBarMenuGroup from './SMNavBarMenuGroup.vue'
import { useData } from '../../composables/data'
import { useDisplay } from '../../composables/media'

const { theme } = useData()
const { isDekstop } = useDisplay()
const navMenu = ref<HTMLElement | null>(null)
const offcanvasInstance = ref<Offcanvas | null>(null)

onMounted(() => {
     if (typeof window !== 'undefined' && navMenu.value) {
        import('bootstrap/js/dist/offcanvas').then((bootstrap) => {
            const Offcanvas = bootstrap.default || bootstrap
            offcanvasInstance.value = new Offcanvas(navMenu.value)
        })
    }
})

const openMenu = () => {
    offcanvasInstance.value?.show()
}

const closeMenu = () => {
    offcanvasInstance.value?.hide()
}
</script>

<template>
    <button class="navbar-toggler" type="button" @click="openMenu">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-menu offcanvas-xl" ref="navMenu" tabindex="-1">
        <div class="offcanvas-header" v-if="!isDekstop">
            <a href="/" class="offcanvas-title" @click="closeMenu">
                <SMLogo />
            </a>
            <button type="button" class="btn-close" @click="closeMenu"></button>
        </div>

        <div class="offcanvas-body">
            <ul class="navbar-nav">
                <template v-for="item in theme.nav" :key="JSON.stringify(item)">
                    <li class="nav-item" v-if="isDekstop || !item.onlyDekstop">
                        <SMNavBarMenuLink
                            :item="item"
                            @close="closeMenu"
                            v-if="'link' in item" />

                        <SMNavBarMenuGroup
                            :text="item.text"
                            :items="item.items"
                            @close="closeMenu"
                            v-else />
                    </li>
                </template>
            </ul>
        </div>

        <div class="offcanvas-footer" v-if="!isDekstop">
            <SMSocial />
        </div>
    </div>
</template>

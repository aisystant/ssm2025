<script setup lang="ts">
import SMLogo from './SMLogo.vue'
import SMNavBarButtons from './SMNavBarButtons.vue'
import SMNavBarMenu from './SMNavBarMenu.vue'
import { useDisplay } from '../../composables/media'

const { isDekstop } = useDisplay()
</script>

<template>
    <header class="header">
        <nav class="navbar">
            <a class="navbar-brand" href="/">
                <SMLogo />
            </a>

            <div class="navbar-actions" v-if="isDekstop">
                <SMNavBarButtons />
            </div>

            <SMNavBarMenu />
        </nav>
    </header>
</template>

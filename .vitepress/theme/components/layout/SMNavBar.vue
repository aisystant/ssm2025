<script setup lang="ts">
import SMLogo from './SMLogo.vue'
import SMNavBarButtons from './SMNavBarButtons.vue'
import SMNavBarMenu from './SMNavBarMenu.vue'
import { useData } from '../../composables/data'

const { theme } = useData()
</script>

<template>
    <header class="header">
        <nav class="navbar">
            <a class="navbar-brand" href="/">
                <SMLogo />
            </a>

            <div class="navbar-actions">
                <SMNavBarButtons
                :buttons="theme.expandButtons"
                v-if="theme.expandButtons" />
            </div>

            <SMNavBarMenu />
        </nav>
    </header>
</template>

<script setup lang="ts">
import SMLogo from './SMLogo.vue'
import SMNavBarMenu from './SMNavBarMenu.vue'
import SvgIcon from '../SvgIcon.vue'
import { useData } from '../../composables/data'
import { useDisplay } from '../../composables/media'

const { theme } = useData()
const { isMobile } = useDisplay()
</script>

<template>
    <header class="header">
        <nav class="navbar">
            <a class="navbar-brand" href="/">
                <SMLogo />
            </a>

            <div class="navbar-actions">
                <a :href="theme.extLinks.aisystant" class="btn btn-outline" target="_blank">
                    <template v-if="!isMobile">Aisystant</template>
                    <SvgIcon name="magic" />
                </a>
            </div>

            <SMNavBarMenu />
        </nav>
    </header>
</template>

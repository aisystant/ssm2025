<script setup lang="ts">
import SMLogo from './SMLogo.vue'
import SMNavBarMenu from './SMNavBarMenu.vue'
import SvgIcon from '../SvgIcon.vue'
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
                <a :href="theme.extLinks.aisystant" class="btn btn-outline" target="_blank">
                    Aisystant
                    <SvgIcon name="magic" />
                </a>
            </div>

            <SMNavBarMenu />
        </nav>
    </header>
</template>

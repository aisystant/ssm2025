<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
import { useData } from '../../composables/data'

const { theme } = useData()
</script>

<template>
    <div class="button-wrapper" v-if="theme.expandButtons">
        <template v-for="item in theme.expandButtons" :key="JSON.stringify(item)">
            <a
                class="btn btn-expand"
                :href="item.link"
                :target="item.target ?? undefined">
                <SvgIcon :name="item.icon" />
                <span class="label">{{ item.text }}</span>
            </a>
        </template>
    </div>
</template>

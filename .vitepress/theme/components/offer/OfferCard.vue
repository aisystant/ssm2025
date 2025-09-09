<script setup lang="ts">
import { Button } from '../../interfaces'

defineProps<{
    title: string,
    text: string,
    footer: string,
    button: Button,
}>()
</script>

<template>
    <div class="offer-card">
        <div class="card-body">
            <h3 class="card-title" v-html="title"></h3>

            <div class="card-button">
                <a :href="button.link.trim()" class="btn">
                    {{ button.name }}
                </a>
            </div>

            <div class="card-text" v-html="text"></div>

            <div class="card-footer" v-html="footer"></div>
        </div>
    </div>
</template>

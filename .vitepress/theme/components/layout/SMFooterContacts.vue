<script setup lang="ts">
defineProps<{
    contacts: {
        address?: string
        workhours?: string
        telegram?: string
        email?: string
    }
}>()
</script>

<template>
    <div class="mb-3" v-if="contacts.address">
        <p class="fw-semibold mb-1">Адрес:</p>
        <span v-html="contacts.address"></span>
    </div>

    <div class="mt-2" v-if="contacts.telegram">
        <a :href="contacts.telegram" class="fw-semibold" target="_blank" rel="nofollow noopener">Telegram</a> — менеджер
        <span class="d-inline-block" v-html="contacts.workhours" v-if="contacts.workhours"></span>
    </div>

    <div class="mt-2" v-if="contacts.email">
        <a :href="`mailto:${contacts.email}`" class="fw-semibold">
            {{ contacts.email }}
        </a>
    </div>
</template>

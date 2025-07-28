<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

interface Contact {
    icon?: string
    name: string
    link?: string
}

defineProps<{
    items: {
        title: string
        contacts: Contact[]
    }[]
}>()
</script>

<template>
    <div class="contacts-card">
        <template v-for="item in items" :key="item.title">
            <div class="card-title" v-html="item.title"></div>

            <template v-for="contact in item.contacts" :key="JSON.stringify(contact)">
                <a :href="contact.link.trim()" class="list-item" target="_blank" v-if="contact.link">
                    <SvgIcon :name="contact.icon" v-if="contact.icon" />
                    <span v-html="contact.name"></span>
                </a>

                <div class="list-item" v-else>
                    <SvgIcon :name="contact.icon" v-if="contact.icon" />
                    <span v-html="contact.name"></span>
                </div>
            </template>
        </template>
    </div>
</template>

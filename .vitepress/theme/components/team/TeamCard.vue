<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
    id: string,
    image: string,
    name: string,
    surname: string,
    post?: string,
    description?: string,
}>()

const memberName = computed(() => {
    return `${props.surname} ${props.name}`
})

const imageSrc = ref('')

onMounted(async () => {
    imageSrc.value = new URL(`/public/images/team/${props.image}?w=300`, import.meta.url).href
})
</script>

<template>
    <a :href="`/team/${id}`" class="team-card">
        <div class="card-image">
            <img
                :src="imageSrc"
                :alt="memberName"
                @error="imageSrc = `/images/team/${image}`">
        </div>

        <div class="card-body">
            <div class="card-title">
                {{ memberName }}
            </div>
            <div
                class="card-small"
                v-html="post"
                v-if="post">
            </div>
            <div
                class="card-text"
                v-html="description"
                v-if="description">
            </div>
        </div>
    </a>
</template>

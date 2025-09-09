<script setup lang="ts">
import { QuizAction } from '../../interfaces'

defineProps<{
    card: QuizAction,
}>()

const emit = defineEmits<{
    (e: 'action'): void,
}>()
</script>

<template>
    <div class="result-card">
        <div
            class="card-title"
            v-html="card.name">
        </div>

        <div
            class="card-text"
            v-html="card.text"
            v-if="card.text">
        </div>

        <a
            :href="card.link.trim()"
            class="btn"
            target="_blank"
            v-if="card.link">
            {{ card.button }}
        </a>

        <button
            class="btn"
            @click="emit('action')"
            v-else>
            {{ card.button }}
        </button>
    </div>
</template>

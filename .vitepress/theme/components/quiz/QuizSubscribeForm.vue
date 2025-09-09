<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    nameInput: string,
    emailInput: string,
    submitButton: string,
    note?: string,
    score: number,
}>()

const name = ref('')
const email = ref('')

const emit = defineEmits<{
    (e: 'next'): void,
}>()

function send() {
    // send request
    emit('next')
}
</script>

<template>
    <form @submit.prevent="send">
        <div class="form-fields">
            <input
                type="text"
                class="form-control"
                v-model.trim="name"
                :placeholder="nameInput">

            <input
                type="email"
                class="form-control"
                v-model.trim="email"
                :placeholder="emailInput">
        </div>

        <div
            class="form-help"
            v-html="note"
            v-if="note">
        </div>

        <div class="form-submit">
            <button class="btn">
                {{ submitButton }}
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, computed } from 'vue'

const props = defineProps<{
    nameInput: string,
    emailInput: string,
    submitButton: string,
    note?: string,
    code: string,
    score: number,
}>()

const name = ref('')
const email = ref('')
const loading = ref(false)
const error = ref(false)

const emit = defineEmits<{
    (e: 'next'): void,
}>()

const valid = computed(() => {
    return name.value.length > 2
        && email.value.length > 3
        && email.value.includes('@')
})

const data = computed(() => {
    return {
        'quiz-code': props.code,
        'name': name.value,
        'email': email.value,
        'score': props.score,
    }
})

function send() {
    error.value = false
    loading.value = true

    axios
        .post('https://n8n.system-school.ru/webhook/188791a4-509d-4717-ae64-85bc38f5e0ef', data.value)
        .then(() => {
            emit('next')
        })
        .catch(() => {
            error.value = true
            loading.value = false
        })
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

            <div
                class="form-text text-danger"
                v-if="error">
                Ошибка отправки данных
            </div>
        </div>

        <div
            class="form-help"
            v-html="note"
            v-if="note">
        </div>

        <div class="form-submit">
            <button
                type="submit"
                :class="['btn', {'btn-loading' : loading }]"
                :disabled="!valid || loading">
                {{ submitButton }}
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import axios from 'axios'
import FormAgreement from './../FormAgreement.vue'
import FormInputError from './../FormInputError.vue'
import { ref, computed, watch } from 'vue'

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
const agreement = ref(false)
const loading = ref(false)
const error = ref(false)
const confirmError = ref(false)

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

watch(() => agreement.value, (val) => {
    if (val) confirmError.value = false
})

function send() {
    error.value = false
    confirmError.value = !agreement.value

    if (confirmError.value) return
    loading.value = true

    axios
        .post('https://n8n.system-school.ru/webhook/a32a5e27-93e7-4245-bf31-ea6af46324aa', data.value)
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

            <div class="form-agreement">
                <FormAgreement
                v-model="agreement" />

                <FormInputError
                text="Подтвердите согласие"
                :show="confirmError" />
            </div>

            <div
                class="form-text text-danger mt-3"
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

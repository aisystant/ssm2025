<script setup lang="ts">
import { MarathonFormSuccess } from '../../interfaces'
import MarathonModalHeader from './MarathonModalHeader.vue'
import MarathonFormComplete from './MarathonFormComplete.vue'
import FormAgreement from '../FormAgreement.vue'
import FormInputError from '../FormInputError.vue'
import yamlText from '../../../../components/marathon/payment.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    marathon_id: number
    title: string
    body?: string[]
    footer?: string[]
    button: string
    error: string
    success: MarathonFormSuccess
}

import axios from 'axios'
import { ref, computed, watch, onMounted } from 'vue'

const paymentId = ref(crypto.randomUUID())
const state = ref<''|'loading'|'success'|'fail'>('')
const code = ref('')
const price = ref('')
const link = ref('')
const surname = ref('')
const name = ref('')
const email = ref('')
const agreement = ref(false)
const confirmError = ref(false)
const errorText = ref('')

const valid = computed(() => {
    return surname.value.length > 2
        && name.value.length > 2
        && isValidEmail.value
})

const isValidEmail = computed(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
})

const sendData = computed(() => {
    return {
        'code': code.value,
        'amount': price.value,
        'lastName': surname.value,
        'firstName': name.value,
    }
})

watch(() => agreement.value, (val) => {
    if (val) confirmError.value = false
})

function send() {
    state.value = ''
    confirmError.value = !agreement.value

    if (confirmError.value) return

    state.value = 'loading'
    const url = `/api/subscriptions/create-internship-payment-external?request-id=${paymentId.value}&email=${encodeURIComponent(email.value)}`
    axios
        .post(url, sendData.value)
        .then(response => {
            link.value = response.data.confirmationUrl
            state.value = 'success'
            window.open(link.value, '_blank')
        })
        .catch(error => {
            state.value = 'fail'
            errorText.value = error.response.data.message || data.error
            paymentId.value = crypto.randomUUID()
        })
}

onMounted(() => {
    axios
        .get(`/api/crm/potok/${data.marathon_id}`)
        .then(response => {
            code.value = response.data.code
            price.value = response.data.price
        })
})
</script>

<template>
    <MarathonModalHeader
    :title="data.title" />

    <MarathonFormComplete
    v-if="state === 'success'"
    :data="data.success"
    :name="name"
    :email="email"
    :link="link" />

    <template v-else>
        <div class="modal-body">
            <div class="payment-form">
                <div class="text-small mb-3" v-if="data.body">
                    <p
                        v-for="item in data.body"
                        :key="item"
                        v-html="item"></p>
                </div>

                <div
                    v-if="state === 'fail'"
                    class="alert alert-danger text-small"
                    v-html="errorText"
                    role="alert">
                </div>

                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control"
                        v-model.trim="surname"
                        placeholder="Фамилия">
                </div>

                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control"
                        v-model.trim="name"
                        placeholder="Имя">
                </div>

                <div class="mb-3">
                    <input
                        type="email"
                        class="form-control"
                        v-model.trim="email"
                        placeholder="Email">
                </div>

                <div class="form-agreement">
                    <FormAgreement
                    v-model="agreement" />

                    <FormInputError
                    text="Подтвердите согласие"
                    :show="confirmError" />
                </div>
            </div>

            <div class="text-small mt-5" v-if="data.footer">
                <p
                    v-for="item in data.footer"
                    :key="item"
                    v-html="item"></p>
            </div>
        </div>

        <div class="modal-footer">
            <button
                type="button"
                :class="['btn', { 'btn-loading' : state === 'loading' }]"
                :disabled="!valid || state === 'loading'"
                @click="send">
                {{ data.button }}
            </button>
        </div>
    </template>
</template>

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
    success: MarathonFormSuccess
}

import axios from 'axios'
import { ref, computed, watch, onMounted } from 'vue'

const surname = ref('')
const name = ref('')
const email = ref('')
const agreement = ref(false)
const loading = ref(false)
const success = ref(false)
const error = ref(false)
const confirmError = ref(false)

const valid = computed(() => {
    return surname.value.length > 2
        && name.value.length > 2
        && email.value.length > 3
        && email.value.includes('@')
})

const sendData = computed(() => {
    return {
        'code': '',
        'amount': '',
        'lastName': surname.value,
        'firstName': email.value,
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
    ///send
}

function getStream() {
    const url = `/api/crm/potok/${data.marathon_id}`
    axios
        .get(url)
        .then(response => {
            console.log(response.data)
        })
}

onMounted(() => {
    getStream()
})
</script>

<template>
    <MarathonModalHeader
    :title="data.title" />

    <MarathonFormComplete
    :data="data.success"
    v-if="success" />

    <template v-else>
        <div class="modal-body">
            <div class="payment-form">
                <div class="text-small mb-3" v-if="data.body">
                    <p
                        v-for="item in data.body"
                        :key="item"
                        v-html="item"></p>
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
                :class="['btn', {'btn-loading' : loading }]"
                :disabled="!valid || loading"
                @click="send">
                {{ data.button }}
            </button>
        </div>
    </template>
</template>

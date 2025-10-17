<script lang="ts" setup>
import formAgreement from '../../../components/agreement.md'
import yamlText from '../../../components/feedback.yml?raw'
import yaml from 'js-yaml'

import axios from 'axios'
import { ref, computed } from 'vue'

const form = yaml.load(yamlText) as {
    title: string
    name?: string
    account?: string
    submit?: string
}

const name = ref('')
const nic = ref('')
const loading = ref(false)
const error = ref(false)

const data = computed(() => {
    return {
        'form_type': 'contact_to_me',
        'user_name': name.value,
        'user_tg_name': nic.value,
    }
})

function send() {
    error.value = false
    loading.value = true

    axios
        .post('https://n8n.system-school.ru/webhook-test/8054c62d-e64f-4737-a582-771351d4c560', data.value)
        .then(() => {

        })
        .catch(() => {
            error.value = true
            loading.value = false
        })
}
</script>

<template>
    <div class="modal fade" id="feedback" tabindex="-1">
        <div class="modal-dialog feedback-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <h5 class="modal-title" v-html="form.title"></h5>

                    <div class="feedback__form">
                        <form @submit.prevent="send">
                            <div class="mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="name"
                                    :placeholder="form.name ?? 'Имя'">
                            </div>

                            <div class="mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="nic"
                                    :placeholder="form.account ?? 'Аккаунт Telegram'">
                            </div>

                            <div class="form-submit">
                                <button type="submit" class="btn">
                                    {{ form.submit ?? 'Отправить' }}
                                </button>
                            </div>
                        </form>

                        <div class="form-agreement">
                            <formAgreement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

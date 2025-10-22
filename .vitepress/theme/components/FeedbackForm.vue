<script lang="ts" setup>
import imageSrc from '../assets/img/success.svg'
import CloseModal from './CloseModal.vue'
import formAgreement from '../../../components/agreement.md'
import yamlText from '../../../components/feedback.yml?raw'
import yaml from 'js-yaml'

import axios from 'axios'
import { ref, computed, onMounted } from 'vue'

const form = yaml.load(yamlText) as {
    title: string
    name?: string
    account?: string
    submit?: string
    success: string
    error: string
}

const name = ref('')
const nic = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref(false)

const valid = computed(() => {
    return name.value.length > 2
        && nic.value.length > 2
})

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
        .post('https://n8n.system-school.ru/webhook/8054c62d-e64f-4737-a582-771351d4c560', data.value)
        .then(() => {
            success.value = true
            loading.value = false
        })
        .catch(() => {
            error.value = true
            loading.value = false
        })
}

const modal = ref<HTMLElement | null>(null)

function reset() {
    name.value = ''
    nic.value = ''
    error.value = false
}

onMounted(() => {
    const img = new Image()
    img.src = imageSrc

    if (!modal.value) return
    modal.value?.addEventListener('hidden.bs.modal', reset)
})
</script>

<template>
    <div
        class="modal fade"
        id="feedback"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        ref="modal">

        <div class="modal-dialog feedback-modal">
            <div class="modal-content">
                <div class="modal-body" v-if="success">
                    <h5 class="modal-title" v-html="form.success"></h5>

                    <div class="feedback__form">
                        <img :src="imageSrc">

                        <div class="form-submit">
                            <button
                                type="button"
                                class="btn"
                                data-bs-dismiss="modal">
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>

                <div class="modal-body" v-else>
                    <CloseModal />
                    <h5 class="modal-title" v-html="form.title"></h5>

                    <div class="feedback__form">
                        <div
                            v-if="error"
                            class="alert alert-danger"
                            v-html="form.error"
                            role="alert">
                        </div>

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
                                <button
                                    type="submit"
                                    :class="['btn', {'btn-loading' : loading }]"
                                    :disabled="!valid || loading">
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

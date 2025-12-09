<script setup lang="ts">
import BuyButton from './BuyButton.vue'
import CloseModal from '../CloseModal.vue'
import CountriesSelect from './CountriesSelect.vue'
import { Payment } from '../../interfaces'
import { ref, shallowRef, watch, computed, onMounted } from 'vue'

const props = defineProps<{
    rus: string,
    foreign: string,
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const type = ref<'rus' | 'foreign'>('rus')
const link = computed(() => props[type.value])
const modal = ref<HTMLElement | null>(null)
const modalInstance = ref<Modal | null>(null)

const initModal = () => {
    if (typeof window !== 'undefined' && modal.value) {
        import('bootstrap/js/dist/modal').then((bootstrap) => {
            const Modal = bootstrap.default || bootstrap
            modalInstance.value = new Modal(modal.value)
            modalInstance.value.show()
            modal.value?.addEventListener('hidden.bs.modal', () => emit('close'))
        })
    }
}

const hideModal = () => modalInstance.value?.hide()

const data = ref<Payment | null>(null)
const content = shallowRef(null)
const country = ref('')

onMounted(async () => {
    initModal()
    try {
        const page = await import('../../../../components/payment.md')
        data.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})

watch(() => type.value, (val: string) => {
    if (val === 'rus') country.value = ''
})
</script>

<template>
    <div
        class="modal fade"
        ref="modal"
        role="dialog"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false">
        <div class="modal-dialog modal-payment">
            <div class="modal-content" v-if="data">
                <div class="modal-header">
                    <CloseModal />
                    <h4
                        class="modal-title"
                        v-html="data.title">
                    </h4>
                </div>

                <div class="modal-body">
                    <div class="payment-options">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="pay-type"
                                id="pay-rus"
                                v-model="type"
                                value="rus">
                            <label
                                class="form-check-label"
                                for="pay-rus">
                                {{ data.payments.rus }}
                            </label>
                        </div>

                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="pay-type"
                                id="pay-foreign"
                                v-model="type"
                                value="foreign">
                            <label
                                class="form-check-label"
                                for="pay-foreign">
                                {{ data.payments.foreign }}
                            </label>
                        </div>
                    </div>

                    <div class="check-country" v-if="type === 'foreign'">
                        <CountriesSelect
                        :list="data.list"
                        v-model="country" />
                    </div>
                </div>

                <div class="modal-footer" v-if="type === 'rus'|| country">
                    <component :is="content"
                    class="footer-text"
                    v-if="content" />

                    <BuyButton
                    :name="data.button"
                    :link="link"
                    @click="hideModal" />
                </div>
            </div>
        </div>
    </div>
</template>

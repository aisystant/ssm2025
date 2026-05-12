<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MarathonModalTesting from './MarathonModalTesting.vue'
import MarathonModalResult from './MarathonModalResult.vue'
import MarathonModalInvite from './MarathonModalInvite.vue'
import MarathonModalPayment from './MarathonModalPayment.vue'

const modal = ref<HTMLElement | null>(null)
const result = ref<number | null>(null)
const layout = ref<'testing'|'result'|'invite'|'payment'>('testing')

const summary = (count: number | null) => {
    result.value = count
    if (count === null) layout.value = 'invite'
    else layout.value = 'result'
}

const finish = () => {
    result.value = null
    layout.value = 'testing'
}

onMounted(() => {
    modal.value?.addEventListener('hidden.bs.modal', () => {
        if (layout.value == 'payment') finish()
    })
})
</script>

<template>
    <div
        class="modal fade"
        id="marathonTest"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        ref="modal">

        <div class="modal-dialog marathon-modal">
            <div class="modal-content">
                <MarathonModalTesting
                @update="summary"
                v-if="layout == 'testing'" />

                <MarathonModalResult
                :count="result"
                @next="layout = 'invite'"
                v-if="result !== null && layout == 'result'" />

                <MarathonModalInvite
                @next="layout = 'payment'"
                v-if="layout == 'invite'" />

                <MarathonModalPayment
                v-if="layout == 'payment'" />
            </div>
        </div>
    </div>
</template>

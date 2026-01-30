<script setup lang="ts">
import PaymentModal from './PaymentModal.vue'
import { ref } from 'vue'

const isOpen = ref(false)

defineProps<{
    name?: string,
    rus: string,
    foreign: string,
}>()
</script>

<template>
    <button
        type="button"
        class="btn"
        @click="isOpen = true">
        {{ name || 'Купить' }}
    </button>

    <PaymentModal
    :rus="rus"
    :cis="rus"
    :foreign="foreign"
    @close="isOpen = false"
    v-if="isOpen" />
</template>

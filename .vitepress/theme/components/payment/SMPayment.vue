<script setup lang="ts">
import PaymentType from './PaymentType.vue'
import BuyButton from './BuyButton.vue'

defineProps<{
    name?: string,
    rus: string,
    foreign?: string,
}>()
</script>

<template>
    <PaymentType
    :name="name"
    :rus="rus"
    :foreign="foreign"
    v-if="foreign" />

    <BuyButton
    :name="name"
    :link="rus"
    v-else />
</template>

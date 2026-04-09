<script setup lang="ts">
import CloseModal from '../CloseModal.vue'

defineProps<{
    title: string,
}>()
</script>

<template>
    <div class="modal-header">
        <CloseModal />
        <h3 class="modal-title" v-html="title"></h3>
    </div>
</template>

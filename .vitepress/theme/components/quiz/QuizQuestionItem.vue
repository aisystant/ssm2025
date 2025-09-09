<script setup lang="ts">
defineProps<{
    idx: number,
    type: string,
    text: string,
    checked: boolean,
}>()

const emit = defineEmits<{
    (e: 'update:checked'): void
}>()
</script>

<template>
    <div class="question-item">
        <div class="form-check" v-if="type == 'radio'">
            <input
                class="form-check-input"
                type="radio"
                name="question"
                :id="`answer${idx}`"
                :checked="checked"
                @change="emit('update:checked')">

            <label
                class="form-check-label"
                :for="`answer${idx}`"
                v-html="text">
            </label>
        </div>
    </div>
</template>

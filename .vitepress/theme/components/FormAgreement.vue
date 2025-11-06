<script lang="ts" setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits<{
    (e: 'update:modelValue', checked: boolean): void,
}>()

const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.checked)
}
</script>

<template>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            id="agreement"
            :checked="modelValue"
            @change="onChange">

        <label
            class="form-check-label"
            for="agreement">
            Соглашаюсь с <a href="/policy" target="_blank">политикой конфиденциальности</a>
            и даю согласие на <a href="/agreement" target="_blank">обработку персональных данных</a>
        </label>
    </div>
</template>

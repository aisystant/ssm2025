<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { ModelSelect } from 'vue-search-select'
import { CountriesList } from '../../interfaces'

const props = defineProps<{
    list: CountriesList,
    modelValue?: string,
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const country = ref('')

watch(() => country.value, (val: string) => {
    emit('update:modelValue', val)
})

const options = computed(() => props.list.items.map(item => {
    return {
        value: item,
        text: item
    }
}))
</script>

<template>
    <div class="mb-3">
        <label class="form-label" v-html="list.name"></label>
        <model-select
            :options="options"
            v-model="country">
        </model-select>
    </div>
    <template v-if="list.text">
        <p
            v-for="item in list.text"
            :key="JSON.stringify(item)"
            v-html="item">
        </p>
    </template>
</template>

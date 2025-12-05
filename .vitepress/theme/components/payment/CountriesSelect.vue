<script setup lang="ts">
import { computed } from 'vue'
import { ModelSelect } from 'vue-search-select'
import { CountriesList } from '../../interfaces'

const props = defineProps<{
    list: CountriesList,
}>()

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
        <model-select :options="options"></model-select>
    </div>
</template>

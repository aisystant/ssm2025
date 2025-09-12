<script setup lang="ts">
import { Book } from '../../interfaces'
import { ref, onMounted } from 'vue'

const props = defineProps<{
    path: string,
}>()

const emit = defineEmits<{
    (e: 'show'): void
}>()

const book = ref<Book>()

onMounted(async () => {
    try {
        const page = await import(`../../../../components/books/${props.path}.md`)
        book.value = page.__pageData.frontmatter

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="swiper-slide p-2" v-if="book">
        <div @click="emit('show')" role="button">
            <img
                :src="`/images/${book.image}`"
                :alt="book.title"
                class="shadow-sm">
        </div>
    </div>
</template>

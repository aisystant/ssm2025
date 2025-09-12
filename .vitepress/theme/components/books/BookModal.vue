<script setup lang="ts">
import IconLink from '../IconLink.vue'
import CloseModal from '../CloseModal.vue'
import { Book } from '../../interfaces'
import { ref, shallowRef, watch, nextTick, onMounted } from 'vue'

const props = defineProps<{
    path: string,
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const book = ref<Book>()
const content = shallowRef(null)
const modal = ref<HTMLElement | null>(null)

function initModal() {
    if (typeof window !== 'undefined' && modal.value) {
        import('bootstrap/js/dist/modal').then((bootstrap) => {
            const Modal = bootstrap.default || bootstrap
            new Modal(modal.value).show()
            modal.value?.addEventListener('hidden.bs.modal', () => emit('close'))
        })
    }
}

watch(book, val => {
    if (val) nextTick(initModal)
})

onMounted(async () => {
    try {
        const page = await import(`../../../../components/books/${props.path}.md`)
        book.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="modal fade" ref="modal" tabindex="-1" v-if="book">
        <div class="modal-dialog book-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <CloseModal />

                    <div class="book-cover">
                        <img :src="`/images/${book.image}`" :alt="book.title">
                    </div>

                    <div class="book-text">
                        <div class="book-header">
                            <h3 class="modal-title">{{ book.title }}</h3>
                            <div class="modal-subtitle" v-html="book.text" v-if="book.text"></div>
                            <div class="book-author" v-html="book.author" v-if="book.author"></div>
                        </div>

                        <component :is="content" v-if="content" />

                        <div class="book-footer" v-if="book.buttons">
                            <IconLink
                            v-for="item in book.buttons"
                            :key="item.name"
                            :name="item.name"
                            :icon="item.icon"
                            :link="item.link"
                            :isText="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

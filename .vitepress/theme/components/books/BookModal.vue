<script setup lang="ts">
import IconLink from '../ambassador/IconLink.vue'
import { ref, shallowRef, onMounted } from 'vue'

interface Button {
    icon: string
    name: string
    link: string
}

const props = defineProps<{
    path: string,
    title: string,
    text?: string,
    image: string,
    author?: string,
    buttons?: Button[],
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

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

onMounted(async () => {
    initModal()
    try {
        const page = await import(`../../../../components/books/${props.path}.md`)
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="modal fade" ref="modal" tabindex="-1">
        <div class="modal-dialog book-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    <div class="book-cover">
                        <img :src="`/images/${image}`" :alt="title">
                    </div>

                    <div class="book-text">
                        <div class="book-header">
                            <h3 class="modal-title">{{ title }}</h3>
                            <div class="modal-subtitle" v-html="text" v-if="text"></div>
                            <div class="book-author" v-html="author" v-if="author"></div>
                        </div>

                        <component :is="content" v-if="content" />

                        <div class="book-footer" v-if="buttons">
                            <IconLink
                            v-for="item in buttons"
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

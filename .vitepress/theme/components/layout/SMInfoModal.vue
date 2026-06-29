<script setup lang="ts">
import CloseModal from '../CloseModal.vue'
import { Button } from '../../interfaces'
import { ref, shallowRef, onMounted } from 'vue'

const props = defineProps<{
    path: string,
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

interface Info {
    title: string
    button?: Button
}

const data = ref<Info>()
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
        const page = await import(`../../../../components/info/${props.path}.md`)
        data.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <teleport to="body">
        <div class="modal fade" ref="modal" tabindex="-1">
            <div class="modal-dialog modal-info">
                <div class="modal-content">
                    <div class="modal-header">
                        <CloseModal />
                        <h5 class="modal-title" v-html="data?.title"></h5>
                    </div>

                    <div class="modal-body">
                        <component :is="content" v-if="content" />
                    </div>

                    <div class="modal-footer" v-if="data?.button">
                        <a :href="data.button.link.trim()"
                            :class="`btn ${data.button.style || 'btn-secondary'}`"
                            :target="data.button.target ?? undefined">
                            {{ data.button.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import IconLink from '../IconLink.vue'
import CloseModal from '../CloseModal.vue'
import { Ambassador } from '../../interfaces'
import { ref, shallowRef, onMounted } from 'vue'

const props = defineProps<{
    path: string,
    ambassador: Ambassador,
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
        const page = await import(`../../../../components/ambassadors/${props.path}.md`)
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="modal fade" ref="modal" tabindex="-1">
        <div class="modal-dialog ambassador-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <CloseModal />

                    <div class="ambassador-image">
                        <img :src="`/images/${ambassador.image}`" :alt="ambassador.name">
                    </div>

                    <div class="ambassador-card">
                        <h3 class="modal-title">
                            {{ ambassador.name }}
                        </h3>

                        <div class="card-text" v-html="ambassador.post" v-if="ambassador.post"></div>

                        <component :is="content" v-if="content" />

                        <div class="card-footer" v-if="ambassador.social">
                            <IconLink
                            v-for="item in ambassador.social"
                            :key="item.name"
                            :name="item.name"
                            :icon="item.icon"
                            :link="item.link" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

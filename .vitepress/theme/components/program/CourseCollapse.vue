<script setup lang="ts">
import { ref, shallowRef, watch, nextTick, onMounted } from 'vue'

const props = defineProps<{
    name: string,
    path: string,
    open: boolean,
}>()

const collapse = ref<HTMLElement | null>(null)
const content = shallowRef(null)

watch(() => props.open, state => {
    if (!state) return

    nextTick(() => {
        collapse.value?.scrollIntoView()
    })
})

onMounted(async () => {
    try {
        const page = await import(`../../../../components/courses/${props.path}.md`)
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="course-collapse" ref="collapse">
        <div
            class="course-head"
            data-bs-toggle="collapse"
            :data-bs-target="`#${path}`"
            :aria-expanded="open"
            role="button">
            <span class="course-name" v-html="name"></span>
        </div>

        <div :class="['collapse', {'show': open}]" :id="path">
            <div class="course-body">
                <component :is="content" v-if="content" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconLink from './IconLink.vue'
import AmbassadorModal from './AmbassadorModal.vue'
import { ref, onMounted } from 'vue'

interface Ambassador {
    name: string
    post?: string
    image: string
    social?: {
        icon: string
        name: string
        link: string
    }[]
}

const props = defineProps<{
    path: string,
}>()

const ambassador = ref<Ambassador>()
const isOpen = ref(false)

onMounted(async () => {
    try {
        const page = await import(`../../../../components/ambassadors/${props.path}.md`)
        ambassador.value = page.__pageData.frontmatter

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="ambassador-card" v-if="ambassador">
        <div @click="isOpen = true" role="button">
            <div class="card-image">
                <img :src="`/images/${ambassador.image}`" :alt="ambassador.name">
            </div>

            <div class="card-body">
                <div class="card-title">
                    {{ ambassador.name }}
                </div>

                <div class="card-text" v-html="ambassador.post" v-if="ambassador.post"></div>
            </div>
        </div>

        <div class="card-footer" v-if="ambassador.social">
            <IconLink
            v-for="item in ambassador.social"
            :key="item.name"
            :name="item.name"
            :icon="item.icon"
            :link="item.link" />
        </div>
    </div>

    <AmbassadorModal
    :path="path"
    :ambassador="ambassador"
    @close="isOpen = false"
    v-if="ambassador && isOpen" />
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue'

interface User {
    name: string
    link?: string
    post?: string
    image?: string
}

const props = defineProps<{
    path: string,
}>()

const user = ref<User>()
const content = shallowRef(null)

onMounted(async () => {
    try {
        const page = await import(`../../../../components/reviews/${props.path}.md`)
        user.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="swiper-slide" v-if="user">
        <div class="mentor-review">
            <div class="review-body">
                <component :is="content" v-if="content" />
            </div>

            <div class="review-footer">
                <div class="review-image" v-if="user.image">
                    <img :src="`/images/${user.image}`" :alt="user.name">
                </div>

                <div class="revirew-author">
                    <template v-if="user.name">
                        <div class="author-name" v-if="user.link">
                            <a :href="user.link.trim()" target="_blank" rel="nofollow noopener">
                                {{ user.name }}
                            </a>
                        </div>

                        <div class="author-name" v-else>
                            {{ user.name }}
                        </div>
                    </template>

                    <div class="autror-post" v-html="user.post" v-if="user.post"></div>
                </div>
            </div>
        </div>
    </div>
</template>

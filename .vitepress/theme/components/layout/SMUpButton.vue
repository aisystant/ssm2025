<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SvgIcon from '../SvgIcon.vue'

const isVisible = ref(false)

const checkScrollPosition = () => {
    isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<template>
    <transition name="fade">
        <button
            v-if="isVisible"
            class="btn btn-up"
            @click="scrollToTop"
            aria-label="Наверх">
            <SvgIcon name="arrow-up" />
        </button>
    </transition>
</template>

<style scoped>
.fade-leave-to { opacity: 0; }
</style>

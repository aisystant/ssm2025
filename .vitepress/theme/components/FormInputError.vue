<script lang="ts" setup>
defineProps<{
    text: string,
    show: boolean,
}>()
</script>

<template>
    <transition name="fade">
        <div
            class="tooltip error-tooltip"
            role="tooltip"
            v-if="show">
            <div class="tooltip-inner">
                {{ text }}
            </div>
            <div class="tooltip-arrow"></div>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>

<script setup lang="ts">
interface Button {
    name: string
    link: string
    style?: string
    target?: string
}

defineProps<{
    title: string
    buttons: Button[]
    text?: string
}>()
</script>

<template>
    <section class="get-started">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col">
                    <h2 class="section-title" v-html="title"></h2>

                    <div class="section-buttons">
                        <div v-for="button in buttons" :key="button.name">
                            <a
                                :href="button.link.trim()"
                                :class="`btn ${button.style || 'btn-outline'}`"
                                :target="button.target ?? undefined">
                                {{ button.name }}
                            </a>
                        </div>
                    </div>

                    <div class="small" v-html="text" v-if="text"></div>
                </div>

                <div class="section-image"></div>
            </div>
        </div>
    </section>
</template>

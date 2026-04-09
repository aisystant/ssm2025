<script setup lang="ts">
defineProps<{
    title: string,
    items: string[],
    text?: string[],
    button?: string,
}>()
</script>

<template>
    <section class="marathon-howtoget">
        <div class="section-body">
            <h2 class="section-title" v-html="title"></h2>

            <ol class="howtoget-steps">
                <li v-for="item in items" :key="item">
                    <span class="step-name" v-html="item"></span>
                </li>
            </ol>

            <div class="howtoget-result" v-if="text">
                <p
                    v-for="item in text"
                    :key="item"
                    v-html="item"></p>
            </div>

            <div class="howtoget-action" v-if="button">
                <button
                    type="button"
                    class="btn"
                    data-bs-target="#marathonTest"
                    data-bs-toggle="modal">
                    {{ button }}
                </button>
            </div>
        </div>
    </section>
</template>

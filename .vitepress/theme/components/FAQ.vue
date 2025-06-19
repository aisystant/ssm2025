<script setup lang="ts">
defineProps<{
    title: string,
    items: {
        question: string
        answer: string
    }[]
}>()
</script>

<template>
    <section class="program-questions" id="faq">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-body">
            <div class="question-collapse" v-for="(item, i) in items" :key="JSON.stringify(item)">
                <div
                    class="question-head"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#question${i}`"
                    role="button">
                    <span
                        class="question-name"
                        v-html="item.question">
                    </span>
                </div>

                <div
                    class="collapse"
                    :id="`question${i}`">
                    <div
                        class="answer-body"
                        v-html="item.answer">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

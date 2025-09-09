<script setup lang="ts">
import { QuizInvites } from '../../interfaces'

defineProps<{
    name: string,
    data: QuizInvites
}>()
</script>

<template>
    <section class="quiz">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col">
                    <h2
                        class="quiz-title"
                        v-html="data.title">
                    </h2>

                    <div
                        class="quiz-text"
                        v-html="data.text"
                        v-if="data.text">
                    </div>

                    <button
                        class="btn"
                        :data-bs-target="`#${name}`"
                        data-bs-toggle="modal">
                        {{ data.button ?? 'Начать квиз' }}
                    </button>
                </div>

                <div class="section-image">
                    <img :src="data.image
                        ? `/images/${data.image}`
                        : '/images/quiz/quiz.svg'">
                </div>
            </div>
        </div>
    </section>
</template>

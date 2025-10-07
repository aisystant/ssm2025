<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { QuizQuestion } from '../../interfaces'

const props = defineProps<{
    num: number,
    questions: QuizQuestion[],
    footer?: string,
}>()

const popover = ref<HTMLElement | null>(null)
const message = ref('')

function update() {
    popover.value?.classList.remove('show')
    setTimeout(showPopover, 150)
}

function showPopover() {
    const text = props.questions[props.num].message
    if (!text) return
    message.value = text
    popover.value?.classList.add('show')
}

watch(() => props.num, update)
onMounted(showPopover)
</script>

<template>
    <div class="quiz-aside">
        <div class="aside-body">
            <div class="ai-popover">
                <div class="popover fade" ref="popover">
                    <div class="popover-arrow"></div>
                    <div class="popover-body">
                        <div class="ai-name">Aisystant</div>
                        <div class="ai-message" v-html="message"></div>
                    </div>
                </div>
            </div>

            <div class="ai-avatar">
                <img src="/images/quiz/ai-bot.png" alt="Aisystant">
            </div>
        </div>

        <div class="aside-footer" v-html="footer" v-if="footer"></div>
    </div>
</template>

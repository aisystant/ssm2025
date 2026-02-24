<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MarathonResult } from '../../interfaces'
import MarathonModalHeader from './MarathonModalHeader.vue'
import yamlText from '../../../../components/marathon/result.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as MarathonResult[]

const props = defineProps<{
    count: number,
}>()

const emit = defineEmits<{
    (e: 'next'): void,
}>()

const result = ref<MarathonResult | null>(null)

onMounted(() => {
    const currentResult = data.find(item => item.id === props.count)
    if (currentResult) result.value = currentResult
    else emit('next')
})
</script>

<template>
    <template v-if="result">
        <MarathonModalHeader
        :title="result.title" />

        <div class="modal-body">
            <div class="marathon-track" v-if="result.cards">
                <div class="track-point" v-for="card in result.cards" :key="JSON.stringify(card)">
                    <div :class="`point-card ${card.style}`">
                        <div class="card-header" v-html="card.name"></div>

                        <div class="card-body">
                            <ul>
                                <li
                                    v-for="item in card.items"
                                    :key="item"
                                    v-html="item"></li>
                            </ul>
                        </div>

                        <div class="card-footer"
                            v-html="card.footer"
                            v-if="card.footer">
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-lead" v-if="result.body">
                <p
                    v-for="item in result.body"
                    :key="item"
                    v-html="item"></p>
            </div>
        </div>

        <div class="modal-footer">
            <button
                type="button"
                class="btn"
                @click="emit('next')">
                {{ result.button }}
            </button>
        </div>
    </template>
</template>

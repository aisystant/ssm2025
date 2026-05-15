<script setup lang="ts">
import MarathonModalHeader from './MarathonModalHeader.vue'
import yamlText from '../../../../components/marathon/invite.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    features?: {
        name: string
        items: string[]
    }
    body?: string[]
    footer?: string[]
    button: string
}

const emit = defineEmits<{
    (e: 'next'): void,
}>()
</script>

<template>
    <MarathonModalHeader
    :title="data.title" />

    <div class="modal-body">
        <div class="marathon-features" v-if="data.features">
            <div class="features-title" v-html="data.features.name"></div>
            <ul>
                <li
                    v-for="item in data.features.items"
                    :key="item"
                    v-html="item"></li>
            </ul>
        </div>

        <div class="text-inline text-lead" v-if="data.body">
            <p
                v-for="item in data.body"
                :key="item"
                v-html="item"></p>
        </div>

        <div class="text-small mt-4" v-if="data.footer">
            <p
                v-for="item in data.footer"
                :key="item"
                v-html="item"></p>
        </div>
    </div>

    <div class="modal-footer">
        <button
            type="button"
            class="btn"
            @click="emit('next')">
            {{ data.button }}
        </button>
    </div>
</template>

<script lang="ts" setup>
import yamlText from '../../../components/get-started.yml?raw'
import yaml from 'js-yaml'

interface Button {
    name: string
    link: string
    style?: string
    target?: string
}

const data = yaml.load(yamlText) as {
    title: string
    buttons: Button[]
    text?: string
}
</script>

<template>
    <section class="get-started">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col">
                    <h2 class="section-title" v-html="data.title"></h2>

                    <div class="section-buttons">
                        <div v-for="button in data.buttons" :key="JSON.stringify(button)">
                            <a
                                :href="button.link.trim()"
                                :class="`btn ${button.style || 'btn-outline'}`"
                                :target="button.target ?? undefined">
                                {{ button.name }}
                            </a>
                        </div>
                    </div>

                    <div class="small" v-html="data.text" v-if="data.text"></div>
                </div>

                <div class="section-image"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import yamlText from '../../../components/anyquestions.yml?raw'
import yaml from 'js-yaml'

interface Button {
    name: string
    link: string
    style?: string
    target?: string
}

const data = yaml.load(yamlText) as {
    title: string
    text: string[]
    buttons: Button[]
}
</script>

<template>
    <section class="anyquestions">
        <div class="section-body">
            <div class="section-row">
                <div class="anyquestions-body">
                    <h2 class="anyquestions-title" v-html="data.title"></h2>
                    <template v-for="item in data.text" :key="item">
                        <p v-html="item"></p>
                    </template>
                </div>

                <div class="anyquestions-buttons">
                    <template v-for="button in data.buttons" :key="button.name">
                        <a
                            :href="button.link.trim()"
                            :class="`btn ${button.style || 'btn-white'}`"
                            :target="button.target ?? undefined">
                            {{ button.name }}
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

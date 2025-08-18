<script setup lang="ts">
import yamlText from '../../../components/quizinvites.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    text?: string
    image: string
    button: {
        name: string
        link: string
        target?: string
    }
}
</script>

<template>
    <section class="quiz">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col">
                    <h2 class="quiz-title" v-html="data.title"></h2>

                    <div class="quiz-text" v-html="data.text" v-if="data.text"></div>

                    <a
                        class="btn"
                        :href="data.button.link.trim()"
                        :target="data.button.target ?? undefined">
                        {{ data.button.name }}
                    </a>
                </div>

                <div class="section-image">
                    <img :src="`/images/${data.image}`">
                </div>
            </div>
        </div>
    </section>
</template>

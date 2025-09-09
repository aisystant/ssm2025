
<script setup lang="ts">
import { Button } from '../interfaces'
import SvgIcon from './SvgIcon.vue'

import yamlText from '../../../components/systemclub.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    image: string
    button: Button
}
</script>

<template>
    <section class="systemclub">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col">
                    <h2 class="systemclub-title" v-html="data.title"></h2>

                    <a
                        class="btn"
                        :href="data.button.link.trim()"
                        :target="data.button.target ?? undefined">
                        <SvgIcon :name="data.button.icon" v-if="data.button.icon" />
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

<script setup lang="ts">
import yamlText from '../../../../components/error.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    text: string
    image: string
    button?: string
    link?: string
}
</script>

<template>
   <div class="page__error">
        <div class="text-center">
            <p class="h3" v-html="data.title"></p>

            <img :src="`/images/${data.image}`" class="my-4" alt="Ошибка 404">

            <p class="mb-4" v-html="data.text"></p>

            <a
                :href="data.link?.trim() ?? `/`"
                class="btn btn-dark"
                v-if="data.button">
                {{ data.button }}
            </a>
        </div>
    </div>
</template>

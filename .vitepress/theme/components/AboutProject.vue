<script setup lang="ts">
import FormAgreement from './FormAgreement.vue'
import yamlText from '../../../components/about.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    text: string[]
    form: string
    name?: string
    email?: string
    submit?: string
}
</script>

<template>
    <section class="about-project">
        <div class="section-row">
            <div class="section-col">
                <div class="about-body">
                    <h2 class="about-title" v-html="data.title"></h2>
                    <template v-for="item in data.text" :key="JSON.stringify(item)">
                        <p v-html="item"></p>
                    </template>
                </div>
            </div>

            <div class="section-col">
                <div class="section-form">
                    <div class="form-title" v-html="data.form"></div>
                    <form method="post">
                        <div class="mb-3">
                            <input type="text" class="form-control" :placeholder="data.name ?? 'Имя'">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" :placeholder="data.email ?? 'Email'">
                        </div>
                        <div class="form-agreement">
                            <FormAgreement />
                        </div>
                        <div class="form-submit">
                            <button type="submit" class="btn">
                                {{ data.submit ?? 'Получить' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from './../composables/data'
import { isActive } from './../shared'

const { page, frontmatter } = useData()

const isSubscribe = computed(() => {
    return isActive(page.value.relativePath, '/subscribe')
})

import FormAgreement from './FormAgreement.vue'
import yamlText from '../../../components/subscribe.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    subtitle?: string
    whatis: string
    link: string
    name?: string
    email?: string
    submit?: string
}
</script>

<template>
    <section class="subscribe">
        <div class="subscribe__body">
            <div class="section-head">
                <h2 class="h4" v-html="frontmatter.form.title" v-if="isSubscribe && frontmatter.form.title"></h2>

                <template v-else>
                    <h2 class="section-title" v-html="data.title"></h2>
                    <div class="section-subtitle" v-html="data.subtitle" v-if="data.subtitle"></div>
                </template>
            </div>

            <div class="subscribe__form">
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
                            {{ data.submit ?? 'Подписаться' }}
                        </button>
                    </div>
                </form>

                <div class="form-footer" v-if="!isSubscribe">
                    <a :href="data.link" v-html="data.whatis"></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from './../composables/data'
import { isActive } from './../shared'

const { page, frontmatter } = useData()

const isSubscribe = computed(() => {
    return isActive(page.value.relativePath, '/subscribe')
})
</script>

<template>
    <section class="subscribe">
        <div class="subscribe__body">
            <div class="section-head">
                <h2 class="h4" v-html="frontmatter.form.title" v-if="isSubscribe && frontmatter.form.title"></h2>

                <template v-else>
                    <h2 class="section-title">Системный еженедельник</h2>
                    <div class="section-subtitle">
                        Лучшие посты сообщества инженеров, менеджеров и бизнесменов, использующих системный подход для развития себя, команд, сообществ и преобразования мира
                    </div>
                </template>
            </div>

            <div class="subscribe__form">
                <form method="post">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Имя">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-submit">
                        <button type="submit" class="btn">Подписаться</button>
                    </div>
                </form>

                <div class="form-agreement">
                    Нажимая на кнопку, вы соглашаетесь с нашей <a href="/policy">политикой конфиденциальности</a>
                    и даёте согласие на обработку <a href="/agreement">персональных данных</a>.
                </div>

                <div class="form-footer" v-if="!isSubscribe">
                    <a href="/subscribe">Что такое системный еженедельник?</a>
                </div>
            </div>
        </div>
    </section>
</template>

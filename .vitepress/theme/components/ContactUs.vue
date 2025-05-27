<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import FeedbackForm from './FeedbackForm.vue'
</script>

<template>
    <section class="feedback">
        <div class="feedback__body">
            <div class="section-row">
                <div class="section-col">
                    <div class="feedback__invite">
                        <h2 class="section-title">
                            Связь с&nbsp;нами и&nbsp;помощь в&nbsp;выборе курса
                        </h2>
                        <p class="mb-2">Используйте наш бот ШСМ в Telegram, чтобы:</p>
                        <ul>
                            <li>Узнать дату ближайшего потока;</li>
                            <li>Войти в чат выбранного курса;</li>
                            <li>Получить ссылку на оплату и задать вопросы.</li>
                        </ul>
                        <div class="lead">
                            Если остались вопросы — напишите нам в&nbsp;Telegram, и&nbsp;мы ответим лично.
                        </div>
                    </div>
                </div>

                <div class="section-col">
                    <a href="https://t.me/SystemsSchool_bot" class="btn" target="_blank">
                        <SvgIcon name="tg-outline" />
                        Телерамм бот ШСМ
                    </a>
                    <button class="btn" data-bs-toggle="modal" data-bs-target="#feedback">
                        <SvgIcon name="tg-outline" />
                        Свяжитесь со мной
                    </button>
                    <a href="/howtostudy" class="btn">
                        Бесплатная консультация
                    </a>
                </div>
            </div>
        </div>
    </section>
    <FeedbackForm />
</template>

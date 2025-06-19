<script lang="ts" setup>
import formAgreement from '../../../components/agreement.md'
import yamlText from '../../../components/feedback.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    name?: string
    account?: string
    submit?: string
}
</script>

<template>
    <div class="modal fade" id="feedback" tabindex="-1">
        <div class="modal-dialog feedback-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <h5 class="modal-title" v-html="data.title"></h5>
                    <div class="feedback__form">
                        <form method="post">
                            <div class="mb-3">
                                <input type="text" class="form-control" :placeholder="data.name ?? 'Имя'">
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" :placeholder="data.account ?? 'Аккаунт Telegram'">
                            </div>
                            <div class="form-submit">
                                <button type="submit" class="btn">
                                    {{ data.submit ?? 'Отправить' }}
                                </button>
                            </div>
                        </form>
                        <div class="form-agreement">
                            <formAgreement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

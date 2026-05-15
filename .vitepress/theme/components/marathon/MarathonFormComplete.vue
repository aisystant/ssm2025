<script setup lang="ts">
import imageSrc from '../../assets/img/success.svg'
import { MarathonFormSuccess } from '../../interfaces'
import { onMounted } from 'vue'

defineProps<{
    data: MarathonFormSuccess,
    name?: string,
    email?: string,
    link: string,
}>()

onMounted(() => {
    const img = new Image()
    img.src = imageSrc
})
</script>

<template>
    <div class="modal-body">
        <div class="mb-4">
            <p class="text-lead">
                {{ name || 'Спасибо' }},
                <span v-html="data.accept_text"></span>
            </p>
            <p>
                <span v-html="data.link_text"></span>
                <a
                    :href="link"
                    target="_blank"
                    v-html="data.link_name"
                    rel="nofollow noopener">
                </a>.
            </p>
        </div>

        <img :src="imageSrc">
        <div class="text-small mt-5">
            <p>
                <span v-html="data.email_text"></span>
                {{ email || data.email_default }}.
            </p>

            <template v-if="data.footer">
                <p
                    v-for="item in data.footer"
                    :key="item"
                    v-html="item"></p>
            </template>
        </div>
    </div>

    <div class="modal-footer">
        <button
            type="button"
            class="btn"
            data-bs-dismiss="modal">
            {{ data.button }}
        </button>
    </div>
</template>

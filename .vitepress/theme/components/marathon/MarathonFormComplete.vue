<script setup lang="ts">
import imageSrc from '../../assets/img/success.svg'
import { MarathonFormSuccess } from '../../interfaces'
import { ref, computed, watch, onMounted } from 'vue'

defineProps<{
    data: MarathonFormSuccess,
}>()

onMounted(() => {
    const img = new Image()
    img.src = imageSrc
})
</script>

<template>
    <div class="modal-body">
        <div class="mb-4">
            <p class="text-lead" v-html="data.accept_text"></p>

            <p>
                Если переход к оплате не произошел автоматически, перейдите по <a href="#" target="_blank" rel="nofollow noopener">этой ссылке</a>.
            </p>
        </div>

        <img :src="imageSrc">
        <div class="text-small mt-5">
            <p>
                После успешной оплаты вы получите индивидуальную ссылку на&nbsp;вступление в&nbsp;телеграм-чат марафона на n.bakulina-developer@ya.ru.
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

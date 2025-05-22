<script setup lang="ts">
import { computed } from 'vue'

const isHide = computed(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('cookies') === 'hide'
    }
    return false
})

const hide = () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cookies', 'hide')
    }
    return false
}
</script>

<template>
    <div class="toast fade show cookies" v-if="!isHide">
        <div class="toast-body">
            Наш сайт использует файлы cookies.
            Оставаясь на сайте, вы разрешаете обработку этих файлов.
            Вы можете установить настройки cookies в вашем браузере.
        </div>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            @click="hide">
        </button>
    </div>
</template>

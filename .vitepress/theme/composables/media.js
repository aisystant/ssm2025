import { computed, onMounted, ref, onBeforeUnmount } from 'vue';

export function useDisplay() {
    const isMobile = ref(false);
    const isDevice = ref(false);
    const isDekstop = ref(true);

    onMounted(() => {
        if (typeof window !== 'undefined') {
            const updateMediaQueries = () => {
                isMobile.value = window.matchMedia('(max-width: 575.98px)').matches;
                isDevice.value = window.matchMedia('(max-width: 767.98px)').matches;
                isDekstop.value = window.matchMedia('(min-width: 1200px)').matches;
            };

            updateMediaQueries();

            window.addEventListener('resize', updateMediaQueries);

            onBeforeUnmount(() => {
                window.removeEventListener('resize', updateMediaQueries);
            });
        }
    });

    return {
        isMobile: computed(() => isMobile.value),
        isDevice: computed(() => isDevice.value),
        isDekstop: computed(() => isDekstop.value),
    };
}

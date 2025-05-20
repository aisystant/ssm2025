import { computed, onMounted, ref, onBeforeUnmount } from 'vue';

export function useDisplay() {
    const isMobile = ref(false);
    const isDekstop = ref(true);

    onMounted(() => {
        if (typeof window !== 'undefined') {
            const updateMediaQueries = () => {
                isMobile.value = window.matchMedia('(max-width: 576px)').matches;
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
        isDekstop: computed(() => isDekstop.value),
    };
}

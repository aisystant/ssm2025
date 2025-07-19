import { useMediaQuery } from '@vueuse/core';

export function useDisplay() {
    const isMobile = useMediaQuery('(max-width: 575.98px)');
    const isDevice = useMediaQuery('(max-width: 767.98px)');
    const isDekstop = useMediaQuery('(min-width: 1200px)');

    return {
        isMobile,
        isDevice,
        isDekstop
    };
}

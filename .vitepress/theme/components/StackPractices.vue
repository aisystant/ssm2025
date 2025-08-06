<script setup lang="ts">
defineProps<{
    head: string,
    text?: string,
    items: string[],
    style?: string,
}>()
</script>

<template>
    <div class="stack-practices">
        <div class="section-row">
            <div class="practices-head">
                <h3 class="practices-title" v-html="head"></h3>
                <span v-html="text" v-if="text"></span>
            </div>

            <div class="practices-body">
                <ul :class="`practices-list ${style ?? undefined}`">
                    <template v-for="item in items" :key="JSON.stringify(item)">
                        <li v-html="item"></li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

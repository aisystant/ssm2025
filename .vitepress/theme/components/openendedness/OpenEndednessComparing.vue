<script setup lang="ts">
defineProps<{
    title: string,
    head: string[],
    items: {
        name: string
        free: boolean
        paid: boolean
    }[]
}>()
</script>

<template>
    <section class="openendedness-comparing">
        <h2 class="section-title" v-html="title"></h2>

        <div class="compare-table">
            <div class="compare-header">
                <div class="table-row">
                    <template v-for="name in head" :key="name">
                        <div class="table-col" v-html="name"></div>
                    </template>
                </div>
            </div>

            <div class="compare-body">
                <div class="table-row" v-for="item in items" :key="JSON.stringify(item)">
                    <div class="table-col-name" v-html="item.name"></div>

                    <div class="table-col">
                        <span class="plus" v-if="item.free">+</span>
                        <span class="minus" v-else>–</span>
                    </div>

                    <div class="table-col">
                        <span class="plus" v-if="item.paid">+</span>
                        <span class="minus" v-else>–</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

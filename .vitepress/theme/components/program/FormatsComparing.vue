<script setup lang="ts">
import yamlText from '../../../../components/comparing.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    self: string
    group: string
    items: {
        name: string
        self: boolean
        group: boolean
    }[]
}
</script>

<template>
    <section class="program-compare">
        <h2 class="section-title" v-html="data.title"></h2>

        <div class="compare-table">
            <div class="compare-header">
                <div class="table-row">
                    <div class="table-col" v-html="data.self"></div>
                    <div class="table-col" v-html="data.group"></div>
                </div>
            </div>

            <div class="compare-body">
                <div class="table-row" v-for="item in data.items" :key="JSON.stringify(item)">
                    <div class="table-col-name" v-html="item.name"></div>

                    <div class="table-col">
                        <span class="plus" v-if="item.self">+</span>
                        <span class="minus" v-else>–</span>
                    </div>

                    <div class="table-col">
                        <span class="plus" v-if="item.group">+</span>
                        <span class="minus" v-else>–</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

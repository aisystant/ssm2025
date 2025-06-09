<script setup lang="ts">
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <div class="schedule">
        <div class="page-header">
            <h1 class="page-title" v-html="frontmatter.title"></h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="table-responsive">
            <table class="table schedule-table">
                <thead>
                    <tr>
                        <th v-html="frontmatter.thead.date"></th>
                        <th v-html="frontmatter.thead.program"></th>
                        <th v-html="frontmatter.thead.prerequisite"></th>
                        <th v-html="frontmatter.thead.name"></th>
                        <th v-html="frontmatter.thead.format"></th>
                        <th v-html="frontmatter.thead.price"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in frontmatter.tbody" :key="JSON.stringify(item)">
                        <td v-html="item.date"></td>
                        <td v-html="item.program"></td>
                        <td v-html="item.prerequisite"></td>
                        <td v-if="item.link">
                            <a :href="item.link.trim()" v-html="item.name"></a>
                        </td>
                        <td v-html="item.name" v-else></td>
                        <td v-html="item.format"></td>
                        <td v-html="item.price"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ContactUs />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ContactUs from './../ContactUs.vue'
import { data } from '../../../../data/variables'
import { useData } from '../../composables/data'
import { formatPrice, formatMonthDay } from '../../composables/format'

const { frontmatter } = useData()

interface ScheduleRow {
    date: string
    program?: string
    prerequisite?: string
    name: string
    sitelink?: string
    target?: string
    format: string
    price: string
}

const rows = ref<ScheduleRow[]>([])

const formatting = (row: ScheduleRow) => {
    return {
        ...row,
        date: formatMonthDay(row.date),
        price: formatPrice(row.price)
    }
}

onMounted(() => {
    let scheduleRows: ScheduleRow[] = []

    if (data && data.schedule) {
        scheduleRows = data.schedule
                      .sort((a, b) => a.date.localeCompare(b.date))
                      .map(formatting)
    }

    if (frontmatter.value && frontmatter.value.tbody) {
        rows.value = [
            ...frontmatter.value.tbody,
            ...scheduleRows
        ]
    } else {
        rows.value = scheduleRows
    }
})
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

                <tbody v-if="rows.length">
                    <tr v-for="row in rows" :key="JSON.stringify(row)">
                        <td v-html="row.date"></td>
                        <td v-html="row.program"></td>
                        <td v-html="row.prerequisite"></td>
                        <td v-if="row.sitelink">
                            <a :href="row.sitelink.trim()"
                                v-html="row.name"
                                :target="row.target ?? undefined">
                            </a>
                        </td>
                        <td v-html="row.name" v-else></td>
                        <td v-html="row.format"></td>
                        <td v-html="row.price"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ContactUs />
</template>

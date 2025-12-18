<script setup lang="ts">
import SMPayment from '../payment/SMPayment.vue'
import { PaymentLinks } from '../../interfaces'
import { formatPrice, formatMonthDay } from '../../composables/format'

interface Course {
    name: string
    date: string
    price?: string
    paylink: PaymentLinks
    schedule?: string
    text?: string[]
}

defineProps<{
    title: string,
    buy?: string,
    program: {
        head: string
        button: string
        paylink: PaymentLinks
    },
    courses: Course[]
}>()
</script>

<template>
    <section class="program-starting" id="schedule">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-row">
            <div class="starting-items">
                <div class="course-item" v-for="course in courses" :key="course.name">
                    <div class="course-card">
                        <div class="card-head">
                            <div class="start-date">
                                Старт — {{ formatMonthDay(course.date) }}
                            </div>
                            <div class="course-name" v-html="course.name"></div>
                        </div>

                        <div class="course-desc" v-html="course.schedule" v-if="course.schedule"></div>

                        <div class="card-body">
                            <div class="course-text" v-if="course.text">
                                <template v-for="item in course.text" :key="item">
                                    <p v-html="item"></p>
                                </template>
                            </div>

                            <div class="course-cart">
                                <div class="course-price" v-if="course.price">
                                    {{ formatPrice(course.price) }}
                                </div>

                                <div class="course-button" v-if="course.paylink.rus">
                                    <SMPayment
                                    :name="buy"
                                    :rus="course.paylink.rus"
                                    :foreign="course.paylink.foreign ?? undefined" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="starting-program">
                <div class="h3" v-html="program.head"></div>
                <SMPayment
                :name="program.button"
                :rus="program.paylink.rus"
                :foreign="program.paylink.foreign ?? undefined"
                v-if="program.paylink.rus" />
            </div>
        </div>
    </section>
</template>

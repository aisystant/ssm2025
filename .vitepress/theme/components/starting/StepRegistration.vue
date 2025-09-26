<script setup lang="ts">
import { Button } from '../../interfaces'

defineProps<{
    title: string,
    image: string,
    text?: string,
    button: Button
}>()
</script>

<template>
    <section class="step-section">
        <div class="step-body">
            <div class="step-registration">
                <div class="section-body">
                    <h2 class="step-title" v-html="title"></h2>

                    <div class="my-4">
                        <a :href="button.link.trim()"
                            class="btn btn-accent"
                            target="_blank"
                            rel="nofollow">
                            {{ button.name }}
                        </a>
                    </div>
                    <p class="step-text" v-html="text" v-if="text"></p>
                </div>

                <div class="section-image">
                    <img :src="`/images/${image}`" alt="ИТ-платформа Aisystant">
                </div>
            </div>
        </div>
    </section>
</template>

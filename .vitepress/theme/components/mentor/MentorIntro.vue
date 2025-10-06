<script setup lang="ts">
defineProps<{
    name: string,
    description: string,
    image: string,
    roles?: string[],
    thesis?: string,
}>()
</script>

<template>
    <section class="mentor-intro">
        <div class="section-container">
            <div class="section-row">
                <div class="section-body">
                    <h1 class="mentor-title" v-html="name"></h1>

                    <div class="mentor-description" v-html="description"></div>

                    <ul class="menthor-roles" v-if="roles">
                        <template v-for="item in roles" :key="JSON.stringify(item)">
                            <li v-html="item"></li>
                        </template>
                    </ul>

                    <div class="mentor-thesis" v-html="thesis" v-if="thesis"></div>
                </div>

                <div class="section-image">
                    <div class="mentor-image">
                        <img
                            :src="`/images/team/${image}`"
                            :alt="name"
                            fetchpriority="high">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface List {
    name: string
    items: string[]
}

defineProps<{
    title: string,
    text?: string,
    before: List,
    after: List,
}>()
</script>

<template>
    <section class="program-result">
        <div class="container">
            <div class="result-body">
                <div class="section-row">
                    <div class="section-col">
                        <h2 class="result-title" v-html="title"></h2>
                    </div>
                    <div class="section-col">
                        <div v-html="text" v-if="text"></div>
                    </div>

                    <div class="section-col">
                        <div class="before-block">
                            <p class="lead" v-html="before.name"></p>
                            <ul class="list-point">
                                <template v-for="item in before.items" :key="JSON.stringify(item)">
                                    <li v-html="item"></li>
                                </template>
                            </ul>
                        </div>
                    </div>

                    <div class="section-col">
                        <div class="after-block">
                            <p class="lead" v-html="after.name"></p>
                            <ul class="list-point">
                                <template v-for="item in after.items" :key="JSON.stringify(item)">
                                    <li v-html="item"></li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

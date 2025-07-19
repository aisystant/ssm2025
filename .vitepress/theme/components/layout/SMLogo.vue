<script setup lang="ts">
import { useData } from '../../composables/data'

const { theme } = useData()
</script>

<template>
    <img src="../../assets/img/ssm-logo.svg" :alt="theme.siteTitle">
</template>

<script setup lang="ts">
import TeamCard from './TeamCard.vue'

import { teamPages } from '../../support/members'
const members = teamPages
</script>

<template>
    <div class="team" v-if="members.length">
        <div class="team__item" v-for="member in members" :key="member.id">
            <TeamCard
            :id="member.id"
            :image="member.image"
            :name="member.name"
            :surname="member.surname"
            :post="member.post ?? undefined"
            :description="member.description ?? undefined" />
        </div>
    </div>
</template>

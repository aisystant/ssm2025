<script setup lang="ts">
import { teamPages } from './../support/members'

const members = teamPages
</script>

<template>
    <div class="team" v-if="members.length">
        <div class="team__item" v-for="member in members" :key="member.id">
            <a :href="`/team/${member.id}/`" class="team-card">
                <div class="card-image">
                    <img :src="`/images/${member.image}`" :alt="member.card.name">
                </div>
                <div class="card-body">
                    <div class="card-title">
                        {{ member.card.name }}
                    </div>
                    <div class="card-small" v-if="member.card.post">
                        {{ member.card.post }}
                    </div>
                    <div class="card-text" v-if="member.card.text">
                        {{ member.card.text }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

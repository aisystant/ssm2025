<script setup lang="ts">
import { teamPages } from './../support/members'

const members = teamPages
</script>

<template>
    <div class="team" v-if="members.length">
        <div class="team__item" v-for="member in members" :key="member.id">
            <a :href="`/team/${member.id}/`" class="team-card">
                <div class="card-image">
                    <img
                        :src="`/images/team/${member.image}`"
                        :alt="`${member.surname} ${member.name}`">
                </div>

                <div class="card-body">
                    <div class="card-title">
                        {{ member.surname }} {{ member.name }}
                    </div>
                    <div
                        class="card-small"
                        v-html="member.post"
                        v-if="member.post">
                    </div>
                    <div
                        class="card-text"
                        v-html="member.description"
                        v-if="member.description">
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

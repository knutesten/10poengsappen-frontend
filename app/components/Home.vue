<template>
    <div class='home-page-container'>
        <span class='page-header'>My teams</span>
        <div>
            <router-link v-for="team in teams" :to='{path: `/team/${team.id}`}' class='team-entry'>{{ team.name }}</router-link>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .home-page-container {
        display: flex;
        flex-direction: column;
    }
    .page-header {
        text-align: center;
    }

    .team-entry {
        display: block;
        padding: 0.15rem 0;
        border-bottom: 0.1rem solid whitesmoke;
        text-decoration: none;

        &:hover {
             text-decoration: underline;
         }
    }
</style>

<script>
    import {fetchGet} from 'fetchBuilder'

    export default {
        created () {
            this.fetchTeams()
        },
        computed: {
            teams() {
                return this.$store.state.teams
            }
        },
        methods: {
            fetchTeams() {
                this.$store.dispatch('getTeams')
            }
        }
    }
</script>
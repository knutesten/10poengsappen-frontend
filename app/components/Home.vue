<template>
    <div class='home-page-container'>
        <span class='page-header'>My teams</span>
        <div v-for="team in teams">
            <router-link  :to='{path: `/team/${team.id}`}' class='team-entry'>
                {{ team.name }}
            </router-link>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .home-page-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-header {
        text-align: center;
        font-size: 1.15rem;
        margin-bottom: 0.5rem;
    }

    .team-entry {
        display: block;
        padding: 0.35rem 1rem;
        border-bottom: 0.1rem solid cornflowerblue;
        text-decoration: none;
        transition: all 100ms;
        color: cornflowerblue;

        &:hover {
             padding-left: 2rem;
             padding-right: 2rem;
             font-size: 1.02rem;
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
                return this.$store.state.teams.concat(this.$store.state.teams).concat(this.$store.state.teams)
            }
        },
        methods: {
            fetchTeams() {
                this.$store.dispatch('getTeams')
            }
        }
    }
</script>
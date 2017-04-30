<template>
    <div class='team'>
        {{ team.name }}
        <div class='userlist'>
            <div class='userlist-header'>
                <div class='header-cell'>Name</div>
                <div class='header-cell'>Points</div>
            </div>
            <div v-for='user in users'>
                <app-user :user='user' />
            </div>
        </div>
    </div>
</template>

<script>
    import User from './User.vue'

    export default {
        created () {
            this.fetchTeam()
        },
        components: {
            'app-user': User
        },
        computed: {
            users() {
                return this.$store.state.users
            },
            team() {
                return this.$store.state.teams.find(team => team.id === this.$route.params.teamId) || {}
            }
        },
        methods: {
            fetchTeam() {
                this.$store.dispatch('fetchTeam', this.$route.params.teamId)
            }
        }
    }
</script>

<style lang='scss' scoped>

        .userlist-header {
            background-color: #F6F6FA;
            display: flex;
            padding: 0.5rem;

        .header-cell {
                flex-grow: 1;
                text-align: center;
            }
        }
</style>
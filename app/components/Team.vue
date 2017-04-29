<template>
    <div>
        {{ team.name }}
        <div class='userlist'>
            <div v-for='user in users'>
                <app-user :user='user'></app-user>
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

<style scoped>
    .userlist {
        }
</style>
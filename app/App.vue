<template>
    <div id='app'>
        {{ team.name }}
        <app-userlist :users='users'></app-userlist>
    </div>
</template>

<style>
    #app {
        font-size: 16pt;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<script>
    import Userlist from './components/Userlist.vue'

    export default {
        computed: {
            users() {
                return this.$store.state.users
            },
            team() {
                return this.$store.state.teams[0] || {}
            }
        },
        components: {
            'app-userlist': Userlist
        }
    }
</script>
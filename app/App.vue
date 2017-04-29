<template>
    <div id='app'>
        <app-navbar></app-navbar>
        <router-view></router-view>
    </div>
</template>

<style>
    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<script>
    import Team from './components/Team.vue'
    import Navbar from './components/Navbar.vue'

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
            'app-team': Team,
            'app-navbar': Navbar
        }
    }
</script>
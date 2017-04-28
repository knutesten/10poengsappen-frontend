<template>
    <div id='app'>
        Hello, Vue! U r cool and stuff..!
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
          }
        },
        components: {
            'app-userlist': Userlist
        }
    }
</script>
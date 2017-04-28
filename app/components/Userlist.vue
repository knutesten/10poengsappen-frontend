<template>
    <div class='userlist'>
        <div v-for='user in users'>
            <app-user :user='user'></app-user>
        </div>
    </div>
</template>

<script>
    import User from './User.vue'

    export default {
        props: ['users'],
        components: {
            'app-user': User
        }
    }
</script>

<style scoped>
    .userlist {
        width: 20%;
    }
</style>
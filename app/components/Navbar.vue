<template>
    <div class='navbar'>

        <router-link exact to='/' class='nav-item'>
            <span class='nav-item-text'>Home</span>
        </router-link>
        <a class='nav-item' @click='signOut'>
            <span class='nav-item-text'>Sign out</span>
        </a>
    </div>
</template>

<script>
    import {fetchGet} from 'fetchBuilder'

    export default {
        methods: {
            signOut() {
                alert('placeholder action for sign out!')
//                fetchGet('api/auth/logout')
//                        .then(() => {
////                            this.$router.push('')
//                        })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        display:flex;
        justify-content: flex-end;
        font-size: 14pt;

        a {

            cursor: pointer;
            color: cornflowerblue;
            padding: 0.1rem 0.5rem;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
             background-color: #F6F6FA;
             }

            &:not(:last-of-type) {
                border-right: 0.1rem solid dimgray;
             }
        }

        .router-link-active {
            text-decoration: underline;
            font-weight:bold;
        }
    }
</style>
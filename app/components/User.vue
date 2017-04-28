<template>
    <div class='user'>
        <span class='name'>{{ user.name }}</span>
        <span class='points'>{{ user.points }}</span>
        <div v-if='loggedInUser.id !== user.id' class='reward-points-container'>
            <span class='reward-points' @click='rewardPoints(user)'>+</span>
            <button class='undo-btn' v-if="user.allowUndo">Undo</button>
        </div>
    </div>
</template>

<script>
        export default {
        props: ['user'],
            methods: {
            rewardPoints(user) {
                this.$store.dispatch('rewardPoints', user)
                }
            },
            computed: {
                loggedInUser() {
                    return this.$store.state.user
                }
            },
    }
</script>

<style lang="scss" scoped>
    .user {
        display: flex;
        color: cornflowerblue;
        border-bottom: 0.12rem solid whitesmoke;
        padding: 0.4rem;

        .name, .points {
            width: 50%;
            text-align: center;
        }

        .reward-points-container {
            width: 0;
            position: relative;
            cursor: pointer;

            .reward-points {
                position: absolute;
                opacity: 0.3;

                &:hover {
                    opacity: 1;
                 }
            }

            .undo-btn {
                cursor: pointer;
                position: absolute;
                left: 1rem;
            }
        }
    }
</style>
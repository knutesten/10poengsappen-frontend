<template>
    <div class='user'>
        <span class='name'>{{ user.name }}</span>
        <div class='points'>{{ user.points }}
            <div v-if='loggedInUser.id !== user.id' class='reward-points-container'>
                <div class='action-buttons' v-if='!user.showPointsInput'>
                    <button class='btn-reward-points' @click='showPointsInput(user.id)'>+</button>
                    <button v-if='user.allowUndo' class='btn-undo'>Undo</button>
                </div>
                <div v-if='user.showPointsInput' class='give-points-input-container'>
                    <input autofocus placeholder='1-10' ref='pointsInput' @keyup.enter='rewardPoints(user)'/>
                    <button class='btn-give-points' @click='rewardPoints(user)'>></button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['user'],
        methods: {
            showPointsInput(userId) {
                this.$store.commit('showPointsInput', userId)
            },
            rewardPoints(user, event) {
                this.$store.dispatch('rewardPoints', {user, points: parseInt(this.$refs.pointsInput.value || 0)})
            }
        },
        computed: {
            loggedInUser() {
                return this.$store.state.user
            },
            showInput() {
                return this.$store.state.showPointsInput
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        display: flex;
        align-items: center;
        border-bottom: 0.12rem solid whitesmoke;
        padding: 0.5rem;

    .name, .points {
        width: 50%;
        text-align: center;
    }

    .action-buttons {
        display: flex;
        align-items: center;

        button {
            opacity: 0.3;

            &:hover {
                opacity: 1;
             }
        }

        .btn-reward-points {
            border: 0;
            font-size: 1.1rem;
        }

        .btn-undo {
            margin-left: 0.2rem;
            padding: 0.2rem 0.3rem;
        }
    }

    .points {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .reward-points-container {
        width: 0;
        margin-left: 0.4rem;
        position: relative;
        cursor: pointer;

    .btn-give-points {
        opacity: 0.6;

    &
    :hover {
        opacity: 1;
    }

    &
    :focus {
        outline: none;
    }

    }

    .give-points-input-container {
        left: -100px;
        display: flex;

    input {
        font-size: 1rem;
        height: 1.2rem;
        width: 2.5rem;
        margin-right: 0.3rem;
    }

    }
    }
    }
</style>
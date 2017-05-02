<template>
    <div class='team'>
        {{ team.name }}
        <div class='userlist'>
            <div class='userlist-header'>
                <div class='header-cell'>Name</div>
                <div class='header-cell'>Points</div>
            </div>
            <div v-for='user in users'>
                <app-user :user='user'/>
            </div>
        </div>
    </div>
</template>

<script>
	import User from './User.vue'
	import {mapActions} from 'vuex'

	export default {
		created () {
			this.fetchTeam(this.$route.params.teamId)
		},
		components: {
			'app-user': User
		},
		computed: {
			users() {
				return this.$store.state.team.users
			},
			team() {
				return this.$store.state.team.team
			}
		},
		methods: mapActions('team', [
			'fetchTeam'
		])
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
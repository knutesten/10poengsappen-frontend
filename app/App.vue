<template>
    <div id='app'>
        <app-navbar></app-navbar>
        <router-view class='app-content'></router-view>
    </div>
</template>

<style lang='scss' scoped>
    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .app-content {
        padding-top: 2rem;
        @media (max-width: 992px) {
            width: 100%;
        }
        width: 70%;
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
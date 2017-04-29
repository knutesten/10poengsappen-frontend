import Vue from 'vue'
import Vuex from 'vuex'
import {fetchGet, fetchPost} from 'fetchBuilder'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		user: {},
		users: [],
		teams: []
	},
	mutations: {
		rewardPoints(state, {userId, points}) {
			const user = state.users.find(user => user.id === userId)
			user.points += points
			user.showPointsInput = false
		},
		setAllowUndo(state, {userId, allowUndo}) {
			const user = state.users.find(user => user.id === userId)
			user.allowUndo = allowUndo
		},
		setUser(state, user) {
			state.user = user
		},
		showPointsInput(state, userId) {
			console.log('show')
			const user = state.users.find(user => user.id === userId)
			user.showPointsInput = !user.showPointsInput
		},
		getTeams(state, teams) {
			state.teams = teams
		},
		fetchTeam(state, team) {
			state.users = team.map(user => Object.assign({}, user, {showPointsInput: false, allowUndo: false}))
		}
	},
	actions: {
		rewardPoints({commit, state, dispatch}, {user, points}) {
			fetchPost('api/points', {
				giverId: state.user.id,
				receiverId: user.id,
				teamId: 1,
				amount: points
			})
				.then(() => {
					commit('rewardPoints', {userId: user.id, points})
					commit('setAllowUndo', {userId: user.id, allowUndo: true})
					setTimeout(() => {
						commit('setAllowUndo', {userId: user.id, allowUndo: false})
					}, 10000)
				})
		},
		getTeams(context) {
			fetchGet('/api/teams')
				.then((teams) => {
					context.commit('getTeams', teams)
				})
		},
		fetchTeam(context, teamId) {
			fetchGet(`/api/teams/${teamId}`)
				.then((team) => {
					context.commit('fetchTeam', team)
				})
		}
	}
})
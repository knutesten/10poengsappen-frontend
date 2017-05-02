import {fetchPost, fetchGet} from 'fetchBuilder'

export default {
	namespaced: true,
	state: {
		users: [],
		team: {

		}
	},
	mutations: {
		fetchTeam(state, team) {
			state.users = team.map(user => Object.assign({}, user, {showPointsInput: false, allowUndo: false}))
		},
		rewardPoints(state, {userId, points}) {
			const user = state.users.find(user => user.id === userId)
			user.points += points
			user.showPointsInput = false
		},
		setAllowUndo(state, {userId, allowUndo}) {
			const user = state.users.find(user => user.id === userId)
			user.allowUndo = allowUndo
		},
		showPointsInput(state, userId) {
			const user = state.users.find(user => user.id === userId)
			user.showPointsInput = !user.showPointsInput
		}
	},
	actions: {
		rewardPoints({commit, rootState}, {user, points}) {
			fetchPost('api/points', {
				giverId: rootState.loggedInUser.id,
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
		fetchTeam({commit}, teamId) {
			fetchGet(`/api/teams/${teamId}`)
				.then((team) => {
					commit('fetchTeam', team)
				})
		},
		showPointsInput({commit}, userId) {
			commit('showPointsInput', userId)
		}
	}
}
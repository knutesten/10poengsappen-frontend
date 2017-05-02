import {fetchGet} from 'fetchBuilder'

export default {
	namespaced: true,
	state: {
		teams: []
	},
	mutations: {
		fetchTeams(state, teams) {
			state.teams = teams
		}
	},
	actions: {
		fetchTeams(context) {
			fetchGet('/api/teams')
				.then((teams) => {
					context.commit('fetchTeams', teams)
				})
		}
	}
}
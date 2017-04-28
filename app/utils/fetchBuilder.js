export const fetchGet = (url) => fetch(url, {credentials: 'include', method: 'GET'})
export const fetchPut = (url) => fetch(url, {credentials: 'include', method: 'PUT'})

export default {
	fetchGet, fetchPut
}
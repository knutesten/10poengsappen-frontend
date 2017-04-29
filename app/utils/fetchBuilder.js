export const fetchGet = (url) => fetch(url, {credentials: 'include', method: 'GET'}).then(res => res.json())
export const fetchPut = (url) => fetch(url, {credentials: 'include', method: 'PUT'}).then(res => res.json())
export const fetchPost = (url, body) => fetch(url, {credentials: 'include', method: 'POST', body: JSON.stringify(body)})

export default {
	fetchGet, fetchPut, fetchPost
}

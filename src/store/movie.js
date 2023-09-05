import { Store } from '../core/heropy.js'

const store = new Store({
    searchText: '',
    page: 1,
    movies: []
})

export default store
export const searchMovies = async page => {
    const res = await fetch(`https://omdbapi.com?apikey=4d2edd7&s=${store.state.searchText}&page=${page}`)
    const json = await res.json()
    console.log(json)
}
import { Component } from '../core/heropy.js'
import movieStore, {getMovieDetails} from '../store/movie.js'

export default class Movie extends Component {
    async render() {
        await getMovieDetails(history.state.id)
        console.log(movieStore.state.movie)
    }
}
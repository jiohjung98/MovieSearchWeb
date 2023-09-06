import { Component } from "../core/heropy.js"
import movieStore from '../store/movie.js'
import MovieItem from './MovieItem.js'

export default class MovieList extends Component {
    constructor() {
        super()
        movieStore.subscribe('movies', () => {
            this.render()
        })
    }

    render() {
        this.el.classList.add('movie-list')
        this.el.innerHTML = /* html */ `
            <div class="movies"></div>
        `

        const moviesEl = this.el.querySelector('.movies')
        moviesEl.append(
            // map() - 배열에서 사용하는 프로토타입 메소드로, 앞에 붙어있는 배열데이터를 기준으로 콜백함수를 반복실행하고 반환된 새로운 결과 반환
            ...movieStore.state.movies.map(movie => 
                 new MovieItem({
                    movie
                }).el)
        )
    }
}
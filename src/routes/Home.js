import { Component}  from '../core/heropy.js'
import HeadLine from '../components/Headline.js'
import Search from '../components/Search.js'

export default class Home extends Component { 
    render() {
        const headline = new HeadLine().el
        const search = new Search().el

        this.el.classList.add('container')
        this.el.append(
            headline,
            search
        )
    }
}
import { Component}  from '../core/heropy.js'
import HeadLine from '../components/Headline.js'

export default class Home extends Component { 
    render() {
        const headline = new HeadLine().el

        this.el.classList.add('container')
        this.el.append(
            headline
        )
    }
}
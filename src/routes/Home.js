import { Component}  from '../core/heropy.js'

export default class Home extends Component { 
    render() {
        this.el.innerHTML = '<h1>Hello World</h1>'
    }
}
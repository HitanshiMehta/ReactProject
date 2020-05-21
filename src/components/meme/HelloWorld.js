import React from "react"
import ConditionalComponent from "./ConditionalComponent"

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkRender: true,
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.checkRender !== nextState.checkRender
    // }
    handleClick = () => {
        this.setState({
            checkRender: false
        })
    }
    render() {
        console.log(this.state.loading)
        const Msg = props => <div>{props.message}</div>
        return (
            <div>
                {/* {msg({message:"Hello World!"})} */}
                <Msg message="Hello world!" />
                <button onClick={this.handleClick}>hello</button>
                {this.state.loading ? <h2>Loadning...</h2> : <ConditionalComponent />}
            </div>
        )
    }

}
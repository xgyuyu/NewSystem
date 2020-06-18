import React from "react"

export default class App extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            randomNumber: undefined,
            isLoading: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const { isLoading } = this.state
        if (isLoading) return
        this.fetchRandom()
    }

    fetchRandom() {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({
                randomNumber: (Math.random() * 100) | 0,
                isLoading: false
            })
        }, 2000)
    }
    render() {
        const { randomNumber, isLoading } = this.state

        return (
            <div>
                <h1>class component</h1>
                {randomNumber !== undefined ? <div>randomNumber: {randomNumber}</div> : null}
                <br />
                <button disabled={isLoading} onClick={this.handleClick}>
                    {isLoading ? "loading..." : "刷新"}
                </button>
            </div>
        )
    }

    componentDidMount() {
        document.title = `randomNumber  is ${this.state.randomNumber}`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.randomNumber !== this.state.randomNumber) {
            document.title = `randomNumber  is ${this.state.randomNumber}`
        }
    }

}


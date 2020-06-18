import React from "react"

class WithRandom extends React.Component {
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

    componentDidMount() {
        document.title = `randomNumber  is ${this.state.randomNumber}`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.randomNumber !== this.state.randomNumber) {
            document.title = `randomNumber  is ${this.state.randomNumber}`
        }
    }
    render() {
        const { randomNumber, isLoading } = this.state
        return (
          <div>
              <h1>render props component</h1>
              {this.props.children(randomNumber)}
              <br />
              <button disabled={isLoading} onClick={this.handleClick}>
                  {isLoading ? "loading..." : "refresh"}
              </button>
          </div>
        )
    }
}

export default class App extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {}
    }
    render() {
        return (
            <div>
                <WithRandom>
                    {number => {
                        return <p>显示方式1:{number}</p>
                    }}
                </WithRandom>
                <WithRandom>
                    {number => {
                        return <p>显示方式2:{number}</p>
                    }}
                </WithRandom>
            </div>
        )
    }
}

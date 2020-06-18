import React from "react"

function withBlue(Comp) {
    return class Blue extends React.Component {
        render() {
            return (
                <div style={{ color: "blue" }}>
                    <Comp {...this.props} />
                </div>
            )
        }
    }
}
function withRandom(Comp) {
    return class Random extends React.Component {
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
                  <h1>HOC component</h1>
                  <Comp {...this.props} randomNumber={randomNumber} />
                  <br />
                  <button disabled={isLoading} onClick={this.handleClick}>
                      {isLoading ? "loading..." : "refresh"}
                  </button>
              </div>
            )
        }
    }
}

class ShowingRandom extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {}
    }
    render() {
        return (
            <div>
                HOC{this.props.showStyle}：randomNumber{this.props.randomNumber}
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
        const WithRandom1 = withRandom(ShowingRandom)
        const WithRandom2 = withBlue(withRandom(ShowingRandom)) //compose(withBlue,withRandom)(ShowingRandom)
        return (
            <div>
                <WithRandom1 showStyle="展现方式1" />
                <WithRandom2 showStyle="展现方式2" />
            </div>
        )
    }
}

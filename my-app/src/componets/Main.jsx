import React, { Component } from 'react';
import List from "./List";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    ageUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <>
                <h1><List/></h1>
                <h6></h6>
                <h3>Age: {this.state.count}</h3>
                <button className="btn btn-secondary" onClick={this.ageUp}>Press</button>
            </>
        )
    }
}
export default Main;

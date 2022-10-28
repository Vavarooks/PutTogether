import React, { Component } from 'react';
// import Main from "./Main";


class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age
        };

    }

    ageUp = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

;
    render() {
        return (
            <div>
                <h1>{this.props.name}, {this.props.lastName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h5>Hair Color: {this.props.desc}</h5>
                <button className="btn btn-secondary" onClick={this.ageUp}>Press</button>
            </div>
        )
    }
}
export default List;

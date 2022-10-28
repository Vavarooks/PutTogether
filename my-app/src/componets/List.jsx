import React, { Component } from 'react';
// import Main from "./Main";


class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: this.props.list.age
        }
        ageUp = () => {
            age.setState({
                age: this.state.age + 1
            })
        }

    }

    render() {
        return (
            <>
                <h1>{this.props.list.name}, {this.props.list.lastName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h5>Hair Color: {this.props.list.desc}</h5>
                <button className="btn btn-secondary" onClick={this.ageUp}>Press</button>
            </>
        )
    }
}
export default List;

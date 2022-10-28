import React, { Component } from 'react';
// import Main from "./Main";


class List extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <>
                <div>
                    <br />
                    <div>
                        <div><List name={"Doe, Jane"} /></div>
                        <div><List desc={"hair color: black"} /></div>
                    </div>
                    <br />
                    <div>
                        <div><List name={"Smith, John"} /></div>
                        <div><List desc={"hair color: Brown"} /></div>
                    </div>
                </div>
            </>
        )
    }
}
export default List;

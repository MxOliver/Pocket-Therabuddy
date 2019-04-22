import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

class Page404 extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <h1>Oops! This page seems to be missing! </h1>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Page404;
import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

class Page404 extends Component {

    render() {

        const containerStyle = {
            paddingTop: '35px'
        }

        return (
            <MDBContainer style={containerStyle}>
                <MDBRow>
                    <h1>Oops! This page seems to be missing! </h1>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Page404;
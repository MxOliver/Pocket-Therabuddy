import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/components/App';
import Landing from '../src/components/Landing';
import Dashboard from '../src/components/Dashboard';
import SignUpForm from '../src/components/partials/SignUp';
import SignInForm from '../src/components/partials/SignIn';
import MDBCardtitle from 'mdbreact';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Landing testing', function() {
    it('renders title and app tagline', function() {
        const wrapper = shallow(<Landing />);
        const title = <MDBCardtitle className="h2">Welcome to Your Pocket Thera-buddy</MDBCardtitle>;
        const tagLine = <p className="my-4 font-weight-bold">I'm here to help you keep track of your moods and daily habits, remind you of your favorite coping resources, and give you a spot to reframe your negative thoguhts.</p>;
        expect(wrapper.contains(title)).to.equal(true);
        expect(wrapper.contains(tagLine)).to.equal(true);
    });
});
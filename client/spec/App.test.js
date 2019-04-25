import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/components/App';
import Landing from '../src/components/Landing';
import Dashboard from '../src/components/Dashboard';
import MoodHistory from '../src/components/mood/MoodHistory';
import { MDBCardtitle, MDBBtn }from 'mdbreact';
import { LineChart } from 'recharts';

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

describe('MoodHistory testing', function() {
    it("renders the fetch data button and onClick renders the chart", function() {
        const wrapper = shallow(<MoodHistory />);
        const chart = <LineChart />
        const button = <MDBBtn outline color='red lighten-3' onClick={getData}>Fetch History</MDBBtn>;
        button.simulate('click');
        expect(getData).toHaveBeenCalled();
        expect(wrapper.contains(chart)).to.equal(true);
    });
});
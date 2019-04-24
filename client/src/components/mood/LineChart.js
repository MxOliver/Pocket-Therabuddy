import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const renderLineChart = (
    <ResponsiveContainer width={700} height="80%">
    <LineChart 
        data={this.props.data} 
        margin={{ top: 5, right: 30, left: 20, bottom: 5} }>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" type="number" />
        <YAxis dataKey="mood" label="Mood" type="category" />
        <ToolTip content={<CustomToolTip />} />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="mood" stroke="" />
    </LineChart>
    </ResponsiveContainer>
);

function CustomToolTip({ payload, label, active}) {
    if(active){
        return (
            <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
}
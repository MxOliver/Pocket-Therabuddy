import React, { Component } from 'react';
import { MDBRow } from 'mdbreact';

class MoodHabitChart extends Component {

    constructor(props){
        super(props);

        
        this.filterData = this.filterData.bind(this);
    }

    filterData = (dataArray, obj) => dataArray.filter( data => Object.keys(data).some( key => obj[key] === data[key]) );

    render() {

  
        let mood = ['happy', 'sad', 'tired', 'active', 'angry', 'anxious', 'fine'];
        let habit = ['time alone', 'time outside', 'sleep', 'exercise', 'hydration', 'social interaction', 'leisure activities'];

        const moodDataSet = this.props.moodData;
        const habitDataSet = this.props.habitData;
        let moodSet = [];
        let habitSet = [];
        
        for(let i = 0; i <= 7; i++){
            moodSet.push(
                this.filterData(moodDataSet,{type: mood[i]})
            )
            habitSet.push(
                this.filterData(habitDataSet,{type: habit[i]})
            )
        }

        for(let i = 0; i <= habitSet.length; i++){
            if(habitSet[i] && habitSet[i].length > 0 && moodSet[i] && moodSet[i].length > 0){
                this.props.generateChart(habitSet[i], moodSet[i++]);
            }
        }



            return (
                    <MDBRow>
                    <div className="chart" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div id='trackerChart' />
                     </div>
                    </MDBRow>   
             
            )
    
    }
}

export default MoodHabitChart;
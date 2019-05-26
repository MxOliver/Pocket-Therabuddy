import React, { Component } from 'react';
import { MDBRow } from 'mdbreact';

class MoodHabitChart extends Component {

    constructor(props){
        super(props);

        
        this.filterData = this.filterData.bind(this);
    }

    filterData = (dataArray, obj) => dataArray.filter( data => Object.keys(data).some( key => obj[key] === data[key]) );

    render() {

  
        let mood = ['happy', 'sad', 'tired', 'energetic', 'angry', 'anxious', 'fine'];
        let habit = ['time alone', 'time outside', 'sleep', 'exercise', 'hydration', 'social interaction', 'leisure activities'];

        const moodDataSet = this.props.moodData;
        const habitDataSet = this.props.habitData;
        let moodSet = [];
        let habitSet = [];
        
        const all = [mood, habit];

        all.reduce((acc, cu) => { 
            let ret = [];
              acc.map(obj => {
                cu.map(obj_1 => {
                    habitSet.push(
                        this.filterData(habitDataSet,{type: obj_1})
                    )
                    moodSet.push(
                        this.filterData(moodDataSet,{type: obj})
                    )
                });
                return ret;
              });
           })

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
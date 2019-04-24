import { ResponsiveLine } from '@nivo/line'

const m = []; const l = []; const d = [];
        JSON.parse(moods, function(key, value){
            if(key === "moodselect"){
                m.push(value);
            } 
            if(key === "moodlevel"){
                l.push(value);
            }
            if(key === "createdAt"){
                d.push(value);
            }
        });
        let colors = ['#ef9a9a', '#80cbc4', '#ba6b6c', '#4f9a94', '#b71c1c', '#ffcccb']
        const dataPoints = [];
        for(let i = 0; i < m.length; i++){
            dataPoints.push({
                id: m[i],
                color: colors[i],
                data: [{
                    'x': new Date(Date.parse(d[i])).toDateString(),
                    'y': l[i]
                }]
    
            });
        }

    const moodLineChart = ({ dataPoints }) => (
        <ResponsiveLine
            data={dataPoints}
            margin={{
                'top': 5,
                'right': 30,
                'bottom': 5,
                'left': 20
            }}
            xScale={{
                'type': 'linear'
            }}
            yScale={{
                'type': 'linear',
                'stacked': 'true',
                'min': 'auto',
                'max': 'auto'
            }}
            axisBottom={{
                'orient': 'bottom',
                'tickSize': 1,
                'legend': 'Date',
                'legendPosition': 'middle'
            }}
            axisLeft={{
                'orient': 'left',
                'tickSize': 5,
                'legend': 'Intensity',
                'legendPosition': 'middle'
            }}
            colors={{
                'scheme': 'nivo'
            }}
        />
    )
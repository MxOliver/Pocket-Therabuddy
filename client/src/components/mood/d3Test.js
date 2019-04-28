import d3 from 'd3';
import moment from 'momentjs';

var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

const currDate = moment()
const mindate = moment(currDate, ['DDMMMY']).subtract(1, 'month').format()
const maxDate = moment(currDate, ['DDMMMY']).format()

let xScale = d3.scaleTime().domain([mindate, maxDate]).range([margin.left, width - margin.right]);
let yScale = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);

let line = d3.line()
    .x(function(d) { return xScale(d.date)})
    .y(function (d) { return yScale(d.level)})
    .curve(d3.curveMonotoneX)

var svg = d3.select('#moodChart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale));

svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));

svg.append('path').attr('class', 'line').attr('d', line(happy));


// const vis = d3.select('#moodChart').append("svg")
//     .attr("width", (width+margin)+"px")
//     .attr("height", (height+margin)+"px")
//     .attr("transform", `translate(${margin}, ${margin})`);


//     const xScale = d3.scaleTime().domain([mindate, maxDate]).rangeRound([0, width]);
//     const yScale = d3.scaleLinear().domain([0, 100]).rangeRound([height, 0]);

//     xAxis = d3.svg.axis().orient('bottom').scale(xScale);
//     yAxis = d3.svg.axis().orient('left').scale(yScale);

//     vis.append('svg:g').attr('class', 'x-axis').attr('transform', `translate(0, ${height-margin})`).call(xAxis);

//     vis.append('svg:g').attr('class', 'y-axis').attr('transform', 'rotate(-90)').call(yAxis);

//     const lineGen = d3.svg.line()
//         .x(function(d) {
//             return xScale(d.date);
//         })
//         .y(function(d) {
//             return yScale(d.level);
//         })
//         .interpolate('bases');
    
//     vis.append('svg:path').attr('d', lineGen(happy))
//         .attr('stroke', '#ef9a9a')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none');
        
//     vis.append('svg:path').attr('d', lineGen(sad))
//         .attr('stroke', '#80cbc4')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none')
    
//     vis.append('svg:path').attr('d', lineGen(tired))
//         .attr('stroke', '#ffcccb')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none')
    
//     vis.append('svg:path').attr('d', lineGen(active))
//         .attr('stroke', '#4f9a94')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none')
    
//     vis.append('svg:path').attr('d', lineGen(fine))
//         .attr('stroke', '#ba6b6c')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none')
    
//     vis.append('svg:path').attr('d', lineGen(anxious))
//         .attr('stroke', '#80cbc4')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none')
    
//     vis.append('svg:path').attr('d', lineGen(angry))
//         .attr('stroke', '#ef9a9a')
//         .attr('stroke-width', 2)
//         .attr('fill', 'none')
    

///


 // const margin = {top: 50, right: 50, bottom: 50, left: 50},
    //     width = 960 - margin.left - margin.right,
    //     height = 500 - margin.top - margin.bottom;

    // let maxDate = new Date();
    // let minDate = getPastDate(maxDate, 1);
    // let rangeDates = getDateRange(minDate, maxDate);
    
    // const xScale = d3.scaleLinear().domain([rangeDates]).range([0, width]);
    // const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    // const line = d3.line()
    //     .x(function(d) {
    //         return xScale(d.date);
    //     })
    //     .y(function(d) {
    //         return yScale(d.level);
    //     }).curve(d3.curveMonotoneX)

    // const vis = d3.select('#moodChart').append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // let xAxis = d3.axisBottom(xScale);
    // let yAxis = d3.axisLeft(yScale);

    // vis.append('g').attr('class', 'x-axis').attr('transform', "translate(0," + height + ")").call(xAxis);

    // vis.append('g').attr('class', 'y-axis').call(yAxis);

    
    
    // vis.append('path').data(happy)
    //     .attr('d', line)
    //     .attr('stroke', '#ef9a9a')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none');
        
    // vis.append('path').data(sad)
    //     .attr('d', line)
    //     .attr('stroke', '#80cbc4')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none')
    
    // vis.append('path').data(tired)
    //     .attr('d', line)
    //     .attr('stroke', '#ffcccb')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none')
    
    // vis.append('path').data(active)
    //     .attr('d', line)
    //     .attr('stroke', '#4f9a94')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none')
    
    // vis.append('path').data(fine)
    //     .attr('d', line)
    //     .attr('stroke', '#ba6b6c')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none')
    
    // vis.append('path').data(anxious)
    //     .attr('d', line)
    //     .attr('stroke', '#80cbc4')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none')
    
    // vis.append('path').data(angry)
    //     .attr('d', line)
    //     .attr('stroke', '#ef9a9a')
    //     .attr('stroke-width', 2)
    //     .attr('fill', 'none')
    ///


    var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var formatDate = d3.timeFormat('%a %b %d %Y');

    let dataPoints = dataSet.map(function(d) {
            return {
                date: formatDate(d.date),
                level: +d.level,
                mood: d.mood
            };
    });

    console.log(dataPoints); 

    let maxDate = moment();
    let minDate = moment().subtract(1, 'month');

    let xScale = d3.scaleTime().domain([maxDate, minDate]).range([margin.left, width - margin.right]);
    let yScale = d3.scaleLinear().domain([100, 0]).range([height - margin.bottom, margin.top]);

    var svg = d3.select('#moodChart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    
    svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        
    let line = d3.line()
        .x(function(d) { return xScale(d.date)})
        .y(function (d) { return yScale(d.level)})
        .curve(d3.curveMonotoneX)

    var happyData = dataPoints.filter(function(d) {
        return d.mood === "happy"
    });

    var sadData = dataPoints.filter(function(d) {
        return d.mood === "sad"
    });

    var tiredData = dataPoints.filter(function(d) {
        return d.mood === "tired"
    });

    svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale));

    svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));

    svg.append('path')
        .datum(happyData).attr('class', 'happyLine')
        .attr('stroke', 'pink').attr('stroke-width', 2).attr('d', line);

    svg.append('path')
        .datum(sadData).attr('class', 'happyLine')
        .attr('stroke', 'blue').attr('stroke-width', 2).attr('d', line);

    svg.append('path')
        .datum(tiredData).attr('class', 'happyLine')
        .attr('stroke', 'green').attr('stroke-width', 2).attr('d', line);
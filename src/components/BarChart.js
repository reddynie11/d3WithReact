import React, { useRef, useEffect, useState } from 'react';
import {connect } from 'react-redux';

import { select, axisBottom, axisLeft, scaleLinear, scaleBand, max, min } from 'd3';
import { fetchDataFromAPI } from '../redux/actions';

const BarChart = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        props.fetchDataFromAPI(props.match.params.id)        
    }, [props.match.params.id])

    useEffect(()=>{
        setData(props.data.data)
    },[props.data.data])

    const svgRef = useRef();
    const width = 1200, height = 300;

    useEffect(() => {
        const svg = select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
            .style("padding", 60)
    }, []);

    useEffect(() => {
        if(data !== null){
            const svg = select(svgRef.current);

        const xScale = scaleBand().domain(data.map(d => d.date)).range([0, width]).padding(0.2)
        const yScale = scaleLinear().domain([min(data, d => d.value), max(data, d => d.value)]).range([height, 0])

        const xAxis = axisBottom()
            .scale(xScale);

        svg.append('g')
            .classed('x axis', true)
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        const yAxis = axisLeft()
            .ticks(10)
            .scale(yScale);

        svg.append('g')
            .classed('y axis', true)
            .attr('transform', 'translate(0,0)')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', d => xScale(d.date))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d.value))
            .style('fill', '#3F51B5')
          
        }
    }, [data]);
    
    return (
        <div maxWidth='md' style={{ margin: 20 }}>
            <svg ref={svgRef} style={{ overflow: 'visible' }}>        
            </svg>
        </div>

    )
}

const mapStateToProps = state => ({
    data : state.data
})

export default connect(mapStateToProps, {fetchDataFromAPI})(BarChart);

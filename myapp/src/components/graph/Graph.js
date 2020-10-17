import React, {Component} from 'react';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import moment from 'moment';
import './graph.css';

export class Graph extends Component {
    render() {

        return (
            <div className="graph-container" style={{width: '100%', height: '400px'}}>
            <p className="graph-title">Retail Sales</p>
                <ResponsiveContainer>
                    <LineChart data={this.props.sales}
                               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="weekEnding"
                               tickFormatter={(p)=>moment(p).format('MMM')}
                               interval={4}
                               tickLine={false}
                               />
                        <Tooltip/>
                        <Line dot={false}
                              strokeWidth={3}
                              type="monotone"
                              dataKey="retailSales"
                              stroke="#06B4E9"/>
                        <Line dot={false}
                              strokeWidth={3}
                              type="monotone"
                              dataKey="wholesaleSales"
                              stroke="#848889"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

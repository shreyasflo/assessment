import React from 'react'
import ControlPanel from './ControlPanel';
import "../assets/images/css/layout.css";
export default function Layout(props) {
    return (
        <div className="layout-container">
            <ControlPanel data={(props||{}).data}/>
        </div>
    )
}

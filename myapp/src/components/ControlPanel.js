import React from 'react'
export default function ControlPanel(props) {
    return (
      <div>
            <img className="blender-image" src={`${props.data[0].image}`} alt="Blender"/>
      </div>
    );
}

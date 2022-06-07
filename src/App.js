// Imports
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }

    return (
        <div className="App">
          {colorMap}
          {colors.map((color, i) => 
            <ColorBlock key= {color} />
          )}
        </div>
    )
}

export default App;

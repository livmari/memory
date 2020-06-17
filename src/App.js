import React from 'react'
import './App.css'
import MemoryGrid from "./components/MemoryGrid";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <MemoryGrid />
            </div>
        )
    }
}

export default App

import React from 'react'
import MemoryCard from "./MemoryCard";

class MemoryGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'memory-grid'
        }
    }

    render() {
        return (
            <div className={this.state.classes}>
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
            </div>
        );
    }
}

export default MemoryGrid
import React from 'react'

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'memory-card'
        }
    }

    render() {
        return (
            <div className={this.state.classes}>

            </div>
        )
    }
}

export default MemoryCard
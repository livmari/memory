import React from 'react'
import Heart from '../images/emoji_heart.png'

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
                <img src={Heart} />
            </div>
        )
    }
}

export default MemoryCard
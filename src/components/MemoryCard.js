import React from 'react'
import Heart from '../images/emoji_heart.png'

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'memory-card',
            heart: Heart
        }
    }

    render() {
        return (
            <div className={this.state.classes}>
                <img src={this.state.heart} />
            </div>
        )
    }
}

export default MemoryCard
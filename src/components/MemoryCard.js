import React from 'react'
import Heart from '../assets/emoji_heart.png'

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'memory-card',
            front: Heart,
            back: Heart
        }
    }

    render() {
        return (
            <div className={this.state.classes}>
                <img src={this.state.front} />
                <img src={this.props.back} />
            </div>
        )
    }
}

export default MemoryCard
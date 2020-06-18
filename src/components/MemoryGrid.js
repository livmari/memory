import React from 'react'
import MemoryCard from "./MemoryCard";

class MemoryGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'memory-grid',
            cards: []
        }
    }

    addCards() {
        let cards = []
        const EMOJI_QTY = 96
        let random = Math.floor(Math.random() * EMOJI_QTY)
        let src = '../assets/memory/' + random + '.png'
        const card = <MemoryCard front={src} />
        for (let i = 0; i < 40; i++) {
            cards.push(card)
        }
        return cards
    }

    render() {
        return (
            <div className={this.state.classes}>
                {this.addCards()}
            </div>
        );
    }
}

export default MemoryGrid
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
        const card = <MemoryCard />
        for (let i = 0; i < 40; i++) {
            cards.push(card)
        }
        console.log(cards)
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
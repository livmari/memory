import React from 'react'
import MemoryCard from "./MemoryCard";

class MemoryGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'memory-grid'
        }
    }

    dirSize(path) {
        let fs = require('fs')
        let totalFiles
        fs.readdir(path, (error, files) => {
            totalFiles = files.length
        })
    }

    addCards() {

        let emojiQty = this.dirSize('../assets/emojis')
        let cards = []

        let random = Math.floor(Math.random() * emojiQty)
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
        )
    }
}

export default MemoryGrid
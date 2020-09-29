import React, { Component } from 'react'

export default class PlayerPosition extends Component {
    drop = e => {
        e.preventDefault()
        const player_id = e.dataTransfer.getData('player_id')

        const player = document.getElementById(player_id)
        player.style.display= 'block';

        e.target.appendChild(player)
    }

    dragOver = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                onDrop={this.drop}
                onDragOver= {this.dragOver}
            >
                { this.props.children }
            </div>
        )
    }
}

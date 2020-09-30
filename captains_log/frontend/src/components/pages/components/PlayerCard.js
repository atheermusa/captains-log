import React, { Component } from 'react'

export default class PlayerCard extends Component {

    dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('player_id', target.id);

        // setTimeout(() => {
        //     target.style.display = 'none'
        // }, 0);
    };

    dragOver = e => {
        e.stopPropagation();
    }

    render() {
        return (
            <div
                id={this.props.id}
                className= {this.props.className}
                draggable= "true"
                onDragStart= {this.dragStart}
                onDragOver = {this.dragOver}
            >
                { this.props.children }
            </div>
        )
    }
}

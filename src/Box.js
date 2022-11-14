import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div>
            <div style={{
                height: `${this.props.height}em`,
                width: `${this.props.width}em`,
                background: `${this.props.color}`
            }}>
            </div>
            </div>
        )
    }
}

export default Box;
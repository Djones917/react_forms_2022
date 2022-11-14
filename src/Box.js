import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div style={{
                height: `${this.props.height}em`,
            }}>

            </div>
        )
    }
}

export default Box;
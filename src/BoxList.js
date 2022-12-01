import React, {Component } from 'react';

export default class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: [{width: 10, height: 40, color: blue}]}
    }
    render() {
        return (
            <div>
                <h1>Color Box Maker</h1>
            </div>
        )
    }
}

export default BoxList; 
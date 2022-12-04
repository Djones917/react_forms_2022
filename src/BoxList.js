import React, {Component } from 'react';
import Box from './Box';

 class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = { boxes: [{ width: 10, height: 40, color: orange }] };
    }
    render() {
        const boxes = this.state.boxes.map(boxes => {
            <Box 
              width = {boxes.width}
              height = {boxes.height}
              color = {boxes.color}
            />
        })
        return (
            <div>
                <h1>Color Box Maker</h1>
            </div>
        )
    }
}

export default BoxList; 
import React, { Component } from 'react';

class Block extends Component{
    
    render() {
        return (
            <div className = 'block' onClick = {this.props.click}></div>
        );
    }
}

export default Block;
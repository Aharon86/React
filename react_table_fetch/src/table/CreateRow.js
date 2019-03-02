import React, { Component } from 'react';
import Box from './Box';

class CreateRow extends Component{
    createBox = () =>{
        
        console.log(this.props.data);
    }
    render() {
        return (
            <div>
                {this.createBox()}
            </div>
        );
    }
}

export default CreateRow;
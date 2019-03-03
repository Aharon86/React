import React, { Component } from 'react';
import Box from './Box';

class CreateRow extends Component{
    
    createBox = () =>{
        let arrBox = [];
        let row_td = this.props.row_table;
        if (typeof row_td == 'string') {
            return <Box cell_table = {row_td} key = {1} />;
            
        }else{
            for (let i in row_td) {
                arrBox.push(<Box cell_table = {row_td[i]} key = {i} />); 
            }
            return arrBox;
        }
        
        
    }
    render() {
        return (
            <tr>
                {this.createBox()}
            </tr>
        );
    }
}

export default CreateRow;
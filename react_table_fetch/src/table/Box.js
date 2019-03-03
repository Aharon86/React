import React, { Component } from 'react';

class Box extends Component{
  
    render() {
        return (
            <td>
                {this.props.cell_table}
            </td>
        );
    }
}

export default Box;
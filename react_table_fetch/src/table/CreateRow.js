import React, { Component } from 'react';

class CreateRow extends Component{
    
    render() {
        return (
            <div>
                {this.props.row.action}
            </div>
        );
    }
}

export default CreateRow;
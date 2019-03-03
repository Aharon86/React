import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return (
            <tr>
                <td><input type='checkbox'/> Busy</td>
                <td><input type='checkbox'/> Available</td>
                <td><input type='checkbox'/> Started</td>
                <td><button type='button'>Reload</button></td>
            </tr>
        );
    }
}

export default Footer;
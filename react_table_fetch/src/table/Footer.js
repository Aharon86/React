import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return (
            <footer>
                <div><input type='checkbox'/> Busy</div>
                <div><input type='checkbox'/> Available</div>
                <div><input type='checkbox'/> Started</div>
                <button type='button'>Reload</button>
            </footer>
        );
    }
}

export default Footer;
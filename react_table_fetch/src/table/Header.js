import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <header>
                <div>Status</div>
                <div>Game Number</div>
                <div>Player 1</div>
                <div>Player 2</div>
                <div>Round</div>
                <div>Amount</div>
                <div>Time</div>
                <div>Action</div>
            </header>
        );
    }
}

export default Header;
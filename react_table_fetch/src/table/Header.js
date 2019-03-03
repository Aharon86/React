import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Game Number</th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Round</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import CreateTr from './CreateTr';

class Project extends Component{
    
    sendData = () => {
        let arr_data = [
            {
                "game_number": "47239",
                "status": "Available",
                "player_1": "guest472391",
                "player_2": "guest472392",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47240",
                "status": "Started",
                "player_1": "guest472401",
                "player_2": "guest472402",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47241",
                "status": "Busy",
                "player_1": "guest472411",
                "player_2": "guest472412",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "VIEW"
            },
            {
                "game_number": "47242",
                "status": "Available",
                "player_1": "guest472421",
                "player_2": "guest472422",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47243",
                "status": "Busy",
                "player_1": "guest472431",
                "player_2": "guest472432",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47244",
                "status": "Busy",
                "player_1": "guest472441",
                "player_2": "guest472442",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "VIEW"
            },
            {
                "game_number": "47245",
                "status": "Started",
                "player_1": "guest472451",
                "player_2": "guest472452",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47246",
                "status": "Started",
                "player_1": "guest472461",
                "player_2": "guest472462",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "VIEW"
            },
            {
                "game_number": "47247",
                "status": "Busy",
                "player_1": "guest472471",
                "player_2": "guest472472",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47248",
                "status": "Started",
                "player_1": "guest472481",
                "player_2": "guest472482",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "VIEW"
            },
            {
                "game_number": "47249",
                "status": "Busy",
                "player_1": "guest472491",
                "player_2": "guest472492",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47250",
                "status": "Available",
                "player_1": "guest472501",
                "player_2": "guest472502",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47251",
                "status": "Started",
                "player_1": "guest472511",
                "player_2": "guest472512",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "VIEW"
            },
            {
                "game_number": "47252",
                "status": "Started",
                "player_1": "guest472521",
                "player_2": "guest472522",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47253",
                "status": "Available",
                "player_1": "guest472531",
                "player_2": "guest472532",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            },
            {
                "game_number": "47254",
                "status": "Available",
                "player_1": "guest472541",
                "player_2": "guest472542",
                "round": "15",
                "amount": "32",
                "time": "30",
                "action": "PLAY NOW"
            }
        ];
        fetch("http://rest.learncode.academy/api/johnbob/friends", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(arr_data), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((response) => {return response;})
        .catch(error => console.error('Error:', error));

    }

    showTr = () => {
        
        let obj = this.sendData();
        console.log(obj);
        // for (let i = 0; i < res.length; i++) {
            
            
        // }
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Game Number</th>
                        <th>Status</th>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Round</th>
                        <th>Amount</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showTr()}
                </tbody>
            </table>
        );
    }
}

export default Project;
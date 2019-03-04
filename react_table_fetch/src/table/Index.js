import React, { Component } from 'react';
import CreateRow from './CreateRow';
import arrData from './arrData';
import Header from './Header';
// import Footer from './Footer';
import './css/table.css';



class Project extends Component{
    state = {
        data: [],
        busy: true,
        available: true,
        started: true
    }
    componentDidMount = () => {
        this.sendData();
    }
    reload = () => {
        this.setState({data: []});
        this.sendData();
    }

    sendData = () => {
        let data = arrData();
        console.log(22);
        fetch("http://rest.learncode.academy/api/johnbob/friends", {
                method: 'POST', 
                body: JSON.stringify(data),
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((response) => {this.setState({data: response})})
            .catch(error => console.error('Error:', error));

    }


    showRow = () => {
        let beackData = this.state.data;
        let arrComp = [];
        console.log(this.state.busy);
        console.log(beackData);
        if (beackData.length === 0) {
           arrComp.push(<CreateRow row_table = 'Load...' key={1} />);
        } else{
            for (let i = 0; i < beackData.length; i++) {
                if (beackData[i].status === "Busy" && this.state.busy) {
                    arrComp.push(<CreateRow row_table = {beackData[i]} key = {i} />);
                } 
                if (beackData[i].status === "Available" && this.state.available) {
                    arrComp.push(<CreateRow row_table = {beackData[i]} key = {i} />);
                } 
                if (beackData[i].status === "Started" && this.state.started) {
                    arrComp.push(<CreateRow row_table = {beackData[i]} key = {i} />);
                } 
              
                
            }
            
        }
        return arrComp;
        
    }

    render() {
        return (
            <table>
                <Header />
                <tbody>
                    {this.showRow()}
                    <tr>
                        <td><input type='checkbox' id='busy' onChange = {() => {this.setState({busy: !this.state.busy})}} checked={this.state.busy} /> Busy</td>
                        <td><input type='checkbox' id='available' onChange = {() => {this.setState({available: !this.state.available})}} checked={this.state.available} /> Available</td>
                        <td><input type='checkbox' id='started' onChange = {() => {this.setState({started: !this.state.started})}} checked={this.state.started} /> Started</td>
                        <td><button type='button' onClick = {this.reload}>Reload</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Project;
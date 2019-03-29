import React, { Component } from 'react';
import CreateRow from './CreateRow';
import arrData from './arrData';
import Header from './Header';
// import Footer from './Footer';
import './css/table.css';

import { createStore } from 'redux';
import reducer from './reducers';
import { getData, busy, available, started, reloadData } from './actions';


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

class Project extends Component{
    // state = {
    //     data: [],
    //     busy: true,
    //     available: true,
    //     started: true
    // }
    state = {
        store: getState()
    }
    hello = subscribe(() => this.setState({store: getState()}));

    componentDidMount = () => {
        this.sendData();
    }
    // reload = () => {
    //     this.setState({data: []});
    //     this.sendData();
    // }
    reload = () => {
        dispatch(reloadData());
        this.sendData();
    }
    changeBusy = () => {
        dispatch(busy());
    }
    changeAvailable = () => {
        dispatch(available());
    }
    changeStarted = () => {
        dispatch(started());
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
            // .then((response) => {this.setState({data: response})})
            .then((response) => { dispatch(getData(response)) })
            .catch(error => console.error('Error:', error));

    }

    
    showRow = () => {
        // let beackData = this.state.data;
        let beackData = getState().data;
        let arrComp = [];
        // console.log(this.state.busy);
        console.log(beackData);
        if (beackData.length === 0) {
           arrComp.push(<CreateRow row_table = 'Load...' key={1} />);
        } else{
            for (let i = 0; i < beackData.length; i++) {
                if (beackData[i].status === "Busy" && getState().changeBusy) {
                    arrComp.push(<CreateRow row_table = {beackData[i]} key = {i} />);
                } 
                if (beackData[i].status === "Available" && getState().changeAvailable) {
                    arrComp.push(<CreateRow row_table = {beackData[i]} key = {i} />);
                } 
                if (beackData[i].status === "Started" && getState().changeStarted) {
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
                        {/* <td><input type='checkbox' id='busy' onChange = {() => {this.setState({busy: !this.state.busy})}} checked={this.state.busy} /> Busy</td>
                        <td><input type='checkbox' id='available' onChange = {() => {this.setState({available: !this.state.available})}} checked={this.state.available} /> Available</td>
                        <td><input type='checkbox' id='started' onChange = {() => {this.setState({started: !this.state.started})}} checked={this.state.started} /> Started</td> */}
                        <td><input type='checkbox' id='busy' onChange = {this.changeBusy} checked={getState().changeBusy} /> Busy</td>
                        <td><input type='checkbox' id='available' onChange = {this.changeAvailable} checked={getState().changeAvailable} /> Available</td>
                        <td><input type='checkbox' id='started' onChange = {this.changeStarted} checked={getState().changeStarted} /> Started</td>
                        <td><button type='button' onClick = {this.reload}>Reload</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Project;
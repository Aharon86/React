import React, { Component } from 'react';
import CreateRow from './CreateRow';
import arrData from './arrData';
import Header from './Header';
import Footer from './Footer';
import './css/table.css';



class Project extends Component{
    state = {
        data: []
    }
    componentDidMount = () => {
        this.sendData();
      }

    sendData = () => {
       let data = arrData();
       return fetch("http://rest.learncode.academy/api/johnbob/friends", {
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
        if (beackData.length === 0) {
           arrComp.push(<CreateRow row_table = "Load..." key={1} />);
        } else{
            for (let i = 0; i < beackData.length; i++) {
                arrComp.push(<CreateRow row_table = {beackData[i]} key = {i} />);
                
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
                    <Footer />
                </tbody>
            </table>
        );
    }
}

export default Project;
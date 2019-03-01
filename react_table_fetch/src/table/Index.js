import React, { Component } from 'react';
import CreateRow from './CreateRow';
import arrData from './arrData';
import Header from './Header';
import Footer from './Footer';
import './css/table.css';

var beackData;

class Project extends Component{
    sendData = () => {
       let data = arrData();
       return fetch("http://rest.learncode.academy/api/johnbob/friends", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((response) => {return response;})
        .catch(error => console.error('Error:', error));

    }

    showRow = () => {
        beackData = this.sendData().then((results) => {return results;});
        console.log(beackData);
        let arrComp = [];
        for (let i = 0; i < beackData.length; i++) {
            arrComp.push(<CreateRow row = {beackData[i]} />);
            
        }
        console.log(arrComp);
        return arrComp;
    }

    render() {
        return (
            <section>
                <Header />
                {this.showRow()}
                <Footer />
            </section>
        );
    }
}

export default Project;
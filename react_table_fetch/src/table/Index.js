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
        .then((response) => {this.setState({data: response}),})
        .catch(error => console.error('Error:', error));

    }

    // showRow = () => {
    //     beackData = this.sendData().then((results) => {return results;});
    //     console.log(beackData);
    //     let arrComp = [];
    //     for (let i = 0; i < beackData.length; i++) {
    //         arrComp.push(<CreateRow row = {beackData[i]} />);
            
    //     }
    //     console.log(arrComp);
    //     return arrComp;
    // }

    render() {
        // this.sendData();
        return (
            <section>
                <Header />
                {/* {this.sendData()} */}
                <CreateRow data={this.state.data} />
                <Footer />
            </section>
        );
    }
}

export default Project;
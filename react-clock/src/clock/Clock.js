import React, { Component } from 'react';
import './clock.css';

class Clock extends Component{
    state = {
        value: '',
        rotate: 0,
        styleMinute: {},
        styleHour: {}
    }
    changeInput = (e) => {
        this.setState({value: e.target.value});
        console.log(1);
    } 
    change = () => {
        let inp = this.text.value;
        let minute = inp * 6;
        let duration = inp * 0.1;
        let hour = minute / 12;
        this.setState({
            styleMinute:{
                transform: 'rotate(' + minute + 'deg)',
                transitionDuration: duration + 's'
            },
            styleHour: {
                transform: 'rotate(' + hour + 'deg)',
                transitionDuration: duration + 's'
            }
        });
    }
    render() {
        console.log(1);
        return (
            <section>
                <div className='inp'>
                Write a minute:  
                    {/* <input type='text' value = {this.state.value} onChange ={this.changeInput} /> */}
                    <input type='text' ref = {el => this.text = el } />
                    <button onClick ={this.change}>Change</button>
                </div>
                <div className='clock'>
                    <div className='clock-hand minute' style = {this.state.styleMinute}></div>
                    <div className='clock-hand hour' style = {this.state.styleHour}></div>

                </div>
            </section>
        );
    }
}

export default Clock;
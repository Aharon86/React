import React, { Component } from 'react';
import './style.sass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBloks, victoryCheck, whoIsPlaying, setPlayer } from './actions';
import Block from './Block';
import Info from './Info';
import Popup from './Popup';

class Index extends Component{
    arrBlocks = [];
    // turn = true;
    arrCopyBloks = new Array(9).fill(false);
    

    componentDidMount() {
        this.showBlocks();
    }

    click = (e) => {
        let getElements = document.getElementById('game_window').getElementsByClassName('block');
        let blockValue, blockIndex;
        console.log(!this.arrCopyBloks[0]);
        if (!e.target.innerHTML) {
            
            blockValue = this.props.turn ? 'X': 'O';
            blockIndex = [].indexOf.call(getElements, e.target);
            e.target.innerHTML = blockValue;
            this.arrCopyBloks[blockIndex] = blockValue;
            this.props.whoIsPlaying();
            
            this.props.victoryCheck(this.arrCopyBloks);
        }
        
        
    }

    reset = () => {
        let getElements = document.getElementById('game_window').getElementsByClassName('block');
        this.arrCopyBloks = new Array(9).fill(false);
        this.props.setPlayer();
        for (let item of getElements) {
            item.innerHTML = '';
        }

    }
    
    showBlocks = () => {
        
        for (let i = 0; i < 9; i++) {
            this.arrBlocks.push(<Block click = {this.click} key = {i}/>);
        }
        // return this.arrBlocks;
        this.props.addBloks(this.arrBlocks);
    }
    render () {
        return (
            <div className = 'wrapper'>
                <Info reset = {this.reset} />
                <div id = 'game_window'>
                    {this.props.bloks}
                </div>
                {this.props.check.popup ? <Popup reset = {this.reset} />: null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bloks: state.createData,
        check: state.check,
        turn: state.changePlayer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            addBloks,
            whoIsPlaying,
            setPlayer,
            victoryCheck
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPoint, continueGame } from './actions';

class Popup extends Component{
    startAgain = () => {
        this.props.reset();
        this.props.clearPoint();
    }
    continue = () => {
        this.props.reset();
        this.props.continueGame();
    }
    render() {
        return (
            <div id = 'popup_wrapper'>
                <div id = 'popup'>
                    <p>Winner {this.props.check.winner}</p>
                    <p>You can continue or start again!</p>
                    <div>
                        <button onClick = {this.startAgain}>Start again</button>
                        <button onClick = {this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        check: state.check
    }
}

const mapDispatchToProps =(dispatch) => {
    return bindActionCreators(
        {
            clearPoint,
            continueGame
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
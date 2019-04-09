import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPoint} from './actions';

class Info extends Component{
    render() {
        return (
            <div id = 'info'>
                <div className = 'info_bloks info_game'>
                    <p>X - <span>{this.props.check.X}</span></p>
                    <p>Now must play: <span>{this.props.turn ? 'X': 'O'}</span></p>
                    <p>O - <span>{this.props.check.O}</span></p>
                </div>
                <div className = 'info_bloks info_buttons'>
                    <button onClick = {this.props.reset}>Reset</button>
                    <button onClick = {() => {this.props.reset(); this.props.clearPoint();}}>New Game</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        turn: state.changePlayer,
        check: state.check
    }
}

const mapDispatchToProps =(dispatch) => {
    return bindActionCreators(
        {
            clearPoint
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {newData} from './actions';

class Form extends Component{

    click = () => {
        this.props.newData(this.name.value, this.surname.value);

    }
    
    render (){
        console.log(this.props.user.name);
        return (
            <div>
                <input type = 'text' ref = {e => this.name = e } />
                <input type = 'text' ref = {e => this.surname = e }/>
                <button onClick = {this.click}>Send</button>
                <p>Name: {this.props.user.name}</p>
                <p>Surname: {this.props.user.surname}</p>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
        return {
            user: state.createData
        }
    }
  
const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(
            { 
                newData
            },
            dispatch
        )}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
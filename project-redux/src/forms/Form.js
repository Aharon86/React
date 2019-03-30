import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {newData} from './actions';

class Form extends Component{

    click = () => {
        console.log(this.name.value, this.surname.value);
    }
    
    render (){
        return (
            <div>
                <input type = 'text' ref = {e => this.name = e } />
                <input type = 'text' ref = {e => this.surname = e }/>
                <button onClick = {this.click}>Send</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
        return {
            name: state.createData
        }
    }
  
const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({ 
            newData
        },
         dispatch)
    }

export default connect(mapStateToProps, mapDispatchToProps)(Form);
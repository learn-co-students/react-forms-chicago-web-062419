// Code ControlledInput Component Here
import React, { Component } from 'react';
import { isNull } from 'util';

class Form extends Component {
    state = { 
        firstName: "John",
        lastName: "Henry"
     }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })        
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const firstName = e.target.children[0].value
        const lastName = e.target.children[1].value
        // console.log(e.target.value)
    }

    render() { 
        return ( 
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
                <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
                <input type='submit' value='issa bop' />
            </form>
         );
    }
}
 
export default Form;
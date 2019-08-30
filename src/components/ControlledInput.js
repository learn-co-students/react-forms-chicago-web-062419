// Code ControlledInput Component Here
import React , {Component} from 'react'

export default class ControlledInput extends Component{
    state ={
        firstName: "First",
        lastName: 'Last'
    }

    // handleFirstNameChange = (event) =>{
    //     this.setState({firstName: event.target.value})
    // }

    // handleLastNameChange = (event) =>{
    //     this.setState({lastName: event.target.value})
    //     console.log('Last Name: ' + event.target.value)
    // }

    handleGeneralChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("I am doing a thing")
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleGeneralChange}/>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleGeneralChange}/>
                <input type="submit"/>
            </form>
        )
    }
}
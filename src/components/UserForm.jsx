import React, { Component } from 'react'
import FormUserDetail from './formUserDetail'
import FormPersonalDetail from './formPersonalDetail'
import Confirm from './confirm'
import Success from './success'

export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    //Proceed to next step
    nextStep=()=>{
        const{step}=this.state;
        this.setState({step:step+1})
    }
    //Go back to previous step
    prevStep=()=>{
        const{step}=this.state;
        this.setState({step:step-1})
    }
    //Handle fields change 
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value})
    }
    render() {
        const {step,firstName,lastName,email,occupation,city,bio}=this.state

        const values={firstName,lastName,email,occupation,city,bio}
     
        switch(step){
            case 1:
                return(
                    <FormUserDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
                case 2:
                    return (
                    <FormPersonalDetail
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    )
                    case 3:
                        return (
                            <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                        )
                        case 4:
                            return(
                                <Success
                                />
                            )
                        default:
                            return;
        }
    }
}

export default UserForm

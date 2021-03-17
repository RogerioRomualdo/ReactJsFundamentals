import React, {Component, state} from "react"
import "./counter.css"
import Display from './display';
import StepForm from './stepForm';
import Buttons from './buttons';

export default class Contador extends Component{
    
    state={
        step: this.props.step || 1,
        value: this.props.value || 0
    }

    inc = () =>{
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    changeStep = (newStep) =>{  
        this.setState({
            step: newStep
        })
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <StepForm step={this.state.step} onStepChange={this.changeStep}/>
                <Display value={this.state.value}/>
                <Buttons onInc={this.inc} onDec={this.dec}/>
            </div>
        )
    }

}

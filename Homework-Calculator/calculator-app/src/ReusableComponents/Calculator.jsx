import React from 'react';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstNumber: '',
            secondNumber: '',
            result: '',
            operator: ''
        }
    }

    changeFirstNumber = event => {
        this.setState({
            firstNumber: parseInt(event.target.value)
        })
    }

    changeSecondNumber = e => {
        this.setState({
            secondNumber: parseInt(e.target.value)
        })
    }

    performOperation = () => {
        if (this.operator === '+') {
            this.setState({
                result: parseInt(this.state.firstNumber + this.state.secondNumber)
            })
        } 
        else {
            this.setState({
                result: parseInt(this.state.firstNumber - this.state.secondNumber)
            })
        }
    } 

    calculatePressed = () => {
        this.performOperation()
        this.setState({
            firstNumber : '',
            secondNumber : ''
        })
        
    }
    
  

    render() {
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.firstNumber} onChange={this.changeFirstNumber} type='number' />
                    <input value={this.state.secondNumber} onChange={this.changeSecondNumber} type='number' />
                    <select id="operatorPlusMinus" onChange={(e) => this.operator = e.target.value}>
                        <option value="Choose an operation">Choose an operation</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>


                    {/* <button onClick={ () => this.performOperation('+') }>+</button>
                    <button onClick={ () => this.performOperation('-') }>-</button> */}
                </div>
                <hr />
                
                <button onClick={ () => this.calculatePressed() }>Calculate</button>
                <div className='result'>
                    <p>{this.state.result}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Calculator;
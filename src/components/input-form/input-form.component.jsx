import React, { Component } from 'react'

import FormStore from '../../stores/form-store'

import './input-form.styles.scss'

class InputForm extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        const {value, name} = event.target
        FormStore[name] = value
    }

    handleSubmit = async event => {
        event.preventDefault()
    }

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={this.handleSubmit}>
                    <label>
                        Daily Travel Spend Budget
                        <input 
                            type='number' 
                            name='dailyTrainSpend'
                            value={FormStore.dailyTrainSpend}
                            onChange={this.handleChange}
                            label='DAILY TRAVEL SPEND'
                            required
                        />
                    </label>
                    
                    <span>Daily travel time budget</span>
                    <input type='text' name='daily time' />
                    <span>Destination postcode</span>
                    <input type='text' name='destination postcode' />
                    <span>New home postcode</span>
                    <input type='text' name='home postcode' />
                    <br />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default InputForm
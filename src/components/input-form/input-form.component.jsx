import { observer } from 'mobx-react';
import React, { Component } from 'react'

import FormStore from '../../stores/form-store'

import './input-form.styles.scss'

// @observer
class InputForm extends Component {

    constructor(){
        super();

        this.state = {
            dailyTrainSpend: 0,
            dailyTrainTime: 0,
            dailyCarSpend: 0,
            dailyCarTime: 0,
            destinationPostCode: '',
            homePostCode: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let input = event.target.value;
        FormStore.dailyCarSpend = input
        console.log(FormStore.dailyCarSpend)
    }

    handleSubmit(event) {
        alert('A name was submitted');
        event.preventDefault();
    }
    

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={this.handleSubmit}>
                    <label>Daily Travel Spend Budget</label>
                    <input 
                        type='search' 
                        name='dailyTrainSpend'
                        value={this.input}
                        onChange={this.handleChange}
                        label='DAILY TRAVEL SPEND'
                        required
                    />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default observer(InputForm)

// dailyTrainSpend: 0,
// dailyTrainTime: 0,
// dailyCarSpend: 0,
// dailyCarTime: 0,
// destinationPostCode: '',
// homePostCode: '',
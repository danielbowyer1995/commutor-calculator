import { observer } from 'mobx-react';
import { action } from 'mobx'
import React, { Component } from 'react'

import FormStore from '../../stores/form-store'

import './input-form.styles.scss'

// @observer
class InputForm extends Component {

    // constructor(){
    //     super();
        

    // }
    
    handleChange(event) {
        let input = event.target.value;
        FormStore.travelDetails.dailyCarSpend = input
        return input
    }

    handleSubmit(event) {
        alert('A name was submitted');
        FormStore.show = true
        console.log(FormStore.travelDetails.show)
        event.preventDefault();
    }

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={action(this.handleSubmit)}>
                    <label>Daily Travel Spend Budget</label>
                    <input 
                        type='search' 
                        name='dailyTrainSpend'
                        value={this.input}
                        onChange={action(this.handleChange)}
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
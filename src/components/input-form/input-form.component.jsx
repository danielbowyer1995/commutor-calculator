import { observer } from 'mobx-react';
import { action } from 'mobx'
import React, { Component } from 'react'

import FormStore from '../../stores/form.store'
import TravelStore from '../../stores/travel.store';
// import workOutAreaName from '../../stores/form-store'

import './input-form.styles.scss'


// @observer
class InputForm extends Component {

    // constructor(){
    //     super();
        

    // }

    findLocation = (postCode) => {
        let homeLocation = ''
        if (postCode === 'BR14DQ')
        homeLocation = 'Bromley'
        action(TravelStore.homeLocation = homeLocation)
    }
    
    handleChange(event) {
        const { value, name } = event.target
        let input = value;
        FormStore[name] = input
        return input
    }

    handleSubmit(event) {
        alert('A name was submitted');
        TravelStore.show = true
        console.log(FormStore.show)
        // workOutAreaName(FormStore.formDetails.homePostCode)
        event.preventDefault();
    }

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={action(this.handleSubmit)}>
                    <label>Daily Travel Spend Budget</label>
                    <input 
                        type='text' 
                        name='dailyTravelSpend'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL SPEND'
                        required
                    />
                    <label>Daily Travel Time Budget</label>
                    <input 
                        type='text' 
                        name='dailyTravelTime'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL TIME'
                        required
                    />
                    <label>Destination Postcode</label>
                    <input 
                        type='text' 
                        name='destinationPostCode'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DESTINATION POST CODE'
                        required
                    />
                    <label>New Home Postcode</label>
                    <input 
                        type='text' 
                        name='homePostCode'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='NEW HOME POSTCODE'
                        required
                    />
                    <input type='submit' value='submit' onClick={() => this.findLocation(FormStore.homePostCode)}/>
                </form>
            </div>
        )
    }
}

export default observer(InputForm)

// : '',
//         : '',
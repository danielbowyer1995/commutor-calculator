import { observer } from 'mobx-react';
import { action } from 'mobx'
import React, { Component } from 'react'

import FormStore from '../../stores/form.store'

import { validatePostCode, 
    getHomeLocation, 
    getTravelDetails,
    getAllTravelDetails,
    // getHomeFareZone,
    // getFarePrice,
    // getDestinationFareZone,
    // findNearestStation,
} from '../../utils/calculator.utils'

import './input-form.styles.scss'

class InputForm extends Component {
    
    handleChange(event) {
        const { value, name } = event.target
        let input = value;
        FormStore[name] = input
        return input
    }

    async handleSubmit(event) {
        await getHomeLocation()
        getTravelDetails()
        event.preventDefault();
        validatePostCode(FormStore.destinationPostCode, 'GB')
        validatePostCode(FormStore.homePostCode, 'GB')
        getAllTravelDetails()
        // findNearestStation()
        // getHomeFareZone(TravelStore.nearestHomeStation)
        // getDestinationFareZone(TravelStore.nearestDestinationStation)
        // getFarePrice(TravelStore.destinationFareZone, TravelStore.homeFareZone)
    }

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={action(this.handleSubmit)}>
                    <label className='label-name'>
                        <span className='content-name'>Daily Travel Spend Budget 💰 📈</span>
                    </label>
                    <input
                        className='input-number' 
                        type='number' 
                        name='dailyTravelSpend'
                        autoComplete='off'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL SPEND'
                        required
                    />
                    <label>Daily Travel Time Budget 🚂 ⏱️</label>
                    <input 
                        className='input-number' 
                        type='number' 
                        name='dailyTravelTime'
                        autoComplete='off'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL TIME'
                        required
                    />
                    <label>Destination Postcode 🏢</label>
                    <input 
                        className='input-text'
                        type='text' 
                        name='destinationPostCode'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DESTINATION POST CODE'
                        required
                    />
                    <label>New Home Postcode 🏡</label>
                    <input 
                        className='input-text'
                        type='text' 
                        name='homePostCode'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='NEW HOME POSTCODE'
                        required
                    />
                    <input className='submit-button' type='submit' value='SUBMIT' />
                </form>
            </div>
        )
    }
}

export default observer(InputForm)

// onClick={() => this.findLocation(FormStore.homePostCode)}
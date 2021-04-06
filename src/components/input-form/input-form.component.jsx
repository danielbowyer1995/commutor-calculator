import { observer } from 'mobx-react';
import { action } from 'mobx'
import React, { Component } from 'react'

import FormStore from '../../stores/form.store'
import { getDestination, getHomeLocation, getNearestStations } from '../../utils/calculator.utils'

import './input-form.styles.scss'
import TravelStore from '../../stores/travel.store';
import { postcodeValidator } from 'postcode-validator';

class InputForm extends Component {
    
    handleChange(event) {
        const { value, name } = event.target
        let input = value;
        FormStore[name] = input
        getHomeLocation()
        return input
    }

    handleSubmit(event) {
        event.preventDefault();
        getDestination()
        TravelStore.show = true
    }

    async getStations(latitude, longitude){
        await getHomeLocation();
        postcodeValidator(FormStore.homePostCode, 'GB')
        getNearestStations(latitude, longitude)
        console.log(TravelStore.show)
    }

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={action(this.handleSubmit)}>
                    <label>Daily Travel Spend Budget</label>
                    <input 
                        type='currency' 
                        name='dailyTravelSpend'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL SPEND'
                        required
                    />
                    <label>Daily Travel Time Budget</label>
                    <input 
                        type='number' 
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
                    {
                        FormStore.homePostCode.length < 6 ? null
                        :
                        <button type='button' id='get-nearest-stations' onClick={this.getStations(FormStore.homeCoords.latitude, FormStore.homeCoords.longitude)}> GET Nearest Stations</button>
                    }
                    {
                        !TravelStore.nearestHomeStation.length ? null
                        :
                        <div>
                            <label>Nearest Home Stations</label>
                            <select>
                                {TravelStore.nearestHomeStation.map((station, i) => (
                                    <option key={i} value={station.name}>{station.name}</option>
                                ))}
                            </select>
                        </div>
                    }   
                    
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default observer(InputForm)

// onClick={() => this.findLocation(FormStore.homePostCode)}
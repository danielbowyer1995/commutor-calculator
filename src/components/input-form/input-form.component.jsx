import { observer } from 'mobx-react';
import { action } from 'mobx'
import React, { Component } from 'react'

import FormStore from '../../stores/form.store'
import { getDestination, getHomeLocation, getNearestHomeStations, getNearestDestinationStations } from '../../utils/calculator.utils'

import './input-form.styles.scss'
import TravelStore from '../../stores/travel.store';
import { postcodeValidator } from 'postcode-validator';

class InputForm extends Component {
    
    handleChange(event) {
        const { value, name } = event.target
        let input = value;
        FormStore[name] = input
        return input
    }

    handleSubmit(event) {
        event.preventDefault();
        postcodeValidator(FormStore.destinationPostCode, 'GB')
        postcodeValidator(FormStore.homePostCode, 'GB')
        TravelStore.show = true
    }

    async getDestinationStations(){
        await getDestination();
        getNearestDestinationStations()
    }

    async getHomeStations(){
        await getHomeLocation();
        getNearestHomeStations()
    }

    render(){
        return(
            <div className='input-form'>
                <form className='form-fields' onSubmit={action(this.handleSubmit)}>
                    <label>Daily Travel Spend Budget</label>
                    <input
                        className='input-number' 
                        type='number' 
                        name='dailyTravelSpend'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL SPEND'
                        required
                    />
                    <label>Daily Travel Time Budget</label>
                    <input 
                        className='input-number' 
                        type='number' 
                        name='dailyTravelTime'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DAILY TRAVEL TIME'
                        required
                    />
                    <label>Destination Postcode</label>
                    <input 
                        className='input-text'
                        type='text' 
                        name='destinationPostCode'
                        value={this.input}
                        onChange={action(this.handleChange)}
                        label='DESTINATION POST CODE'
                        required
                    />
                    {
                        FormStore.destinationPostCode.length < 6 ? null
                        :
                        <button type='button' id='get-nearest-destination-stations' 
                            onClick={() => this.getDestinationStations()}> 
                            Find Nearest Stations
                        </button>
                    }
                    {
                        !TravelStore.nearestDestinationStation.length ? null
                        :
                        <div>
                            <select>
                                {TravelStore.nearestDestinationStation.map((station, i) => (
                                    <option key={i} value={station.name}>{station.name}</option>
                                ))}
                            </select>
                        </div>
                    }   
                    <label>New Home Postcode</label>
                    <input 
                        className='input-text'
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
                        <button type='button' id='get-nearest-home-stations' 
                            onClick={() => this.getHomeStations()}> 
                            Find Nearest Stations
                        </button>
                    }
                    {
                        !TravelStore.nearestHomeStation.length ? null
                        :
                        <div>
                            <select>
                                {TravelStore.nearestHomeStation.map((station, i) => (
                                    <option key={i} value={station.name}>{station.name}</option>
                                ))}
                            </select>
                        </div>
                    }   
                    <input className='submit-button' type='submit' value='SUBMIT' />
                </form>
            </div>
        )
    }
}

export default observer(InputForm)

// onClick={() => this.findLocation(FormStore.homePostCode)}
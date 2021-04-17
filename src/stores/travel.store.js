import {observable} from 'mobx'

const TravelStore = observable({
    show: false,
    homeLocation: '',
    nearestDestinationStation: '',
    nearestHomeStation: '',
    journeyData: {},
    trainTravelTime: '',
    lowerValue: false,
    higherValue: false,

})
export default TravelStore
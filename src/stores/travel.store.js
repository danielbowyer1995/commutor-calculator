import {observable} from 'mobx'

const TravelStore = observable({
    show: false,
    homeLocation: '',
    nearestDestinationStation: '',
    nearestHomeStation: '',
    journeyData: {},
    trainTravelTime: ''

})
export default TravelStore
import {observable} from 'mobx'

const TravelStore = observable({
    show: false,
    homeLocation: '',
    nearestDestinationStation: '',
    nearestHomeStation: '',

})
export default TravelStore
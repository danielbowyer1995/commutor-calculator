import { observable } from 'mobx'

const FormStore = observable({
    loading: false,
    show: false,
    showDropDown: false,
    dailyTravelSpend: 0,
    dailyTravelTime: 0,
    destinationPostCode: '',
    destinationDetails: {},
    destinationCoords: {
        longitude: '',
        latitude: ''
    },
    nearestDestinationStations: [],
    homePostCode: '',
    homeDetails: {},
    homeCoords: {
        longitude: '',
        latitude: '',
    },
    nearestHomeStations: [],
})

export default FormStore
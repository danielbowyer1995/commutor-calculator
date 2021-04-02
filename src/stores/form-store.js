import { observable } from 'mobx'

const FormStore = observable({
    formDetails: {
        show: false,
        dailyTravelSpend: 0,
        dailyTravelTime: 0,
        destinationPostCode: '',
        homePostCode: '',
        homeLocation: '',
    }
})
export default FormStore
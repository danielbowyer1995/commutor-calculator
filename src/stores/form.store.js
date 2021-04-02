import { observable } from 'mobx'

const FormStore = observable({
    show: false,
    dailyTravelSpend: 0,
    dailyTravelTime: 0,
    destinationPostCode: '',
    homePostCode: '',
})

export default FormStore
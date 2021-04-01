import { observable } from 'mobx'

const FormStore = observable({
    travelDetails: {
        show: false,
        dailyTrainSpend: 0,
        dailyTrainTime: 0,
        dailyCarSpend: 0,
        dailyCarTime: 0,
        destinationPostCode: '',
        homePostCode: '',
    }
})

export default FormStore
import { observable } from 'mobx'

const FormStore = observable({
    dailyTrainSpend: '',
    dailyTrainTime: 0,
    dailyCarSpend: 0,
    dailyCarTime: 0,
    destinationPostCode: '',
    homePostCode: '',
})

export default FormStore
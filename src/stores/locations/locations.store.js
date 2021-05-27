import { observable, action } from 'mobx'
import clone from 'lodash/cloneDeep'

export default new (class LocationsStore {
  @observable locations = []

  getCount() {
    return this.locations.length - 1
  }

  @action add(item) {
    this.locations.push(clone(item))
  }
})()

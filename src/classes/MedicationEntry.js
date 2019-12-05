import uuid from 'uuid/v1'

export default class MedicationEntry {
    constructor(obj) {
        this.ID = uuid()
        this.name = obj.name || 'No Name Provided'
        this.dosage = obj.dosage || 'Not Provided'
        this.alarms = {
            morning: obj.alarms.morning || false,
            noon: obj.alarms.noon || false,
            evening: obj.alarms.evening || false,
            bed: obj.alarms.bed || false
        }

        Object.seal(this)
    }

    edit(editObj) {
        if (Object.keys(editObj).includes('ID')) return new Error('Attempted to modify an ID, this is no-op.')
        Object.assign(this, editObj)
        return this
    }
    
}
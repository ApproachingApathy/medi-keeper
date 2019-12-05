import uuid from 'uuid/v1'

export default class MedicationEntry {
    constructor(name) {
        this.ID = uuid()
        this.name = name

        Object.seal(this)
    }

    edit(editObj) {
        if (Object.keys(editObj).includes('ID')) return new Error('Attempted to modify an ID, this is no-op.')
        Object.assign(this, editObj)
        return this
    }
    
}
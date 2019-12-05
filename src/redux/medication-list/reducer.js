import * as types from './action-types'
import Medication from '../../classes/MedicationEntry'
const initialState = {list:[]}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case types.CREATE:
            return {...state, list: state.list.concat(new Medication(action.insert))}
        case types.EDIT:
            return {...state, list: state.list.map(item => {
                if (item.ID === action.edit) return item.edit(action.edit)
                else return item
            })}
        case types.REMOVE:
            return {...state, list: state.list.filter(item => {
                return (item.ID !== action.ID)
            })}
        default:
            return {...state}
    }
}
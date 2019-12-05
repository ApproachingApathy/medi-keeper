import * as types from './action-types'

export const create = (newObj) => ({type:types.CREATE, insert:newObj})
export const remove = (ID) => ({type:types.REMOVE, ID})
export const edit = (ID, editObj) => ({type:types.EDIT, ID, edit:editObj})
export const find = (ID) => ({type:types.FIND, ID})
export const clearFound = () => ({type:types.CLEAR_FOUND})
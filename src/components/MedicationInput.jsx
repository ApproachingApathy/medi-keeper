import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'

import { create } from '../redux/medication-list/actions'

class MedicationInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {inputValues:{}}
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            inputValues:{
                ...this.state.inputValues,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.setState({
        //     ...this.state,
        //     medicineList: this.state.medicineList ? this.state.medicineList.concat(this.state.inputValues.newMedication): [this.state.inputValues.newMedication],
        //     inputValues:{},
        // })
        this.props.dispatch1(this.state.inputValues.newMedication)
    }

    render() {
        const field1Name = 'newMedication'
        return (
            <form className="medicine_input-form" onSubmit={e => this.handleSubmit(e)}>
                <TextField label='Medication' variant='outlined' name={field1Name} value={this.state.inputValues[field1Name]} onChange={e => this.handleChange(e)} />
                <Button type='submit' >Add</Button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: (name) => {
            dispatch(create({name}))
        }
    }
}

export default connect(null, mapDispatchToProps)(MedicationInput)
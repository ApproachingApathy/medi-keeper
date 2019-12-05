import React from 'react'
import { TextField, Button, FormGroup, Checkbox, FormControlLabel, Paper, Divider} from '@material-ui/core'
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
                [e.target.name]:e.target.value ? e.target.value : e.target.checked || ''
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            ...this.state,
            inputValues:{},
        })
        this.props.dispatch1({
            name:this.state.inputValues.newMedication,
            dosage: this.state.inputValues.dosage,
            alarms:{
                morning:(Boolean(this.state.inputValues.morning)),
                noon:(Boolean(this.state.inputValues.noon)),
                evening:(Boolean(this.state.inputValues.evening)),
                bed:(Boolean(this.state.inputValues.bed))
            }
        })
    }

    render() {
        const field1Name = 'newMedication'
        const field2Name = 'dosage'
        return (
            <Paper>
                <form className="medicine_input-form" onSubmit={e => this.handleSubmit(e)}>
                    <FormGroup>
                        <TextField label='Medication Name' variant='outlined' name={field1Name} value={this.state.inputValues[field1Name] || ''} onChange={e => this.handleChange(e)} />
                        <TextField label='Dosage(mg, Tbsp, Tablet...)' variant='outlined' name={field2Name} value={this.state.inputValues[field2Name] || ''} onChange={e => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel name='morning' checked={this.state.inputValues.morning || false } onChange={e => this.handleChange(e)} control={<Checkbox color='primary'/>} labelPlacement='end' label='Morning' />
                        <FormControlLabel name='noon' checked={this.state.inputValues.noon || false } onChange={e => this.handleChange(e)} control={<Checkbox  color='primary'/>} labelPlacement='end' label='Noon' />
                        <FormControlLabel name='evening' checked={this.state.inputValues.evening || false } onChange={e => this.handleChange(e)} control={<Checkbox  color='primary'/>} labelPlacement='end' label='Evening' />
                        <FormControlLabel name='bed' checked={this.state.inputValues.bed || false } onChange={e => this.handleChange(e)} control={<Checkbox  color='primary'/>} labelPlacement='end' label='Bed' />
                    </FormGroup>
                    <Button type='submit' >Add</Button>
                </form>
                <Divider variant='middle'/>
            </Paper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: (obj) => {
            dispatch(create(obj))
        }
    }
}

export default connect(null, mapDispatchToProps)(MedicationInput)
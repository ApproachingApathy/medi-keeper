import React from 'react'
import { TableRow, TableCell, Button, TextField, Checkbox } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class MedicineListRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editMode:false, inputValues:{}}
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

    handleEditButton(e, uuid) {
        this.setState({
            ...this.state,
            editMode:true
        })
    }

    handleSubmit(e, uuid) {

        this.props.saveDispatch(this.props.item.ID, {
            name: this.state.inputValues.name || this.props.item.name,
            dosage: this.state.inputValues.dosage || this.props.item.dosage,
            alarms: {
                morning: typeof this.state.inputValues.morning !== 'undefined' ? this.state.inputValues.morning : this.props.item.alarms.morning,
                noon: typeof this.state.inputValues.noon !== 'undefined' ? this.state.inputValues.noon : this.props.item.alarms.noon,
                evening: typeof this.state.inputValues.evening !== 'undefined' ? this.state.inputValues.evening : this.props.item.alarms.evening,
                bed: typeof this.state.inputValues.bed !== 'undefined' ? this.state.inputValues.bed : this.props.item.alarms.bed,             
            }
        })

        this.setState({
            ...this.state,
            editMode: false
        })

    }

    render() {
        if (this.state.editMode) {
            return (
                <TableRow id={`row-${this.props.item.ID}`} key={this.props.item.ID} >
                    
                        <TableCell><TextField value={this.state.inputValues.name || this.props.item.name || ''} name='name' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <TextField value={this.state.inputValues.dosage || this.props.item.dosage || ''} name='dosage' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={typeof this.state.inputValues.morning !== 'undefined' ?  this.state.inputValues.morning : this.props.item.alarms.morning} name='morning' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={typeof this.state.inputValues.noon !== 'undefined' ? this.state.inputValues.noon : this.props.item.alarms.noon} name='noon' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={typeof this.state.inputValues.evening !== 'undefined' ? this.state.inputValues.evening : this.props.item.alarms.evening} name='evening' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={typeof this.state.inputValues.bed !== 'undefined' ? this.state.inputValues.bed : this.props.item.alarms.bed} name='bed' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell>
                            <Button id='button-save' color='primary' type='submit' onClick={e=>this.handleSubmit(e, this.props.item.ID)}>Save</Button>
                        </TableCell>
                    </TableRow>
                
            )
        } else {
            return (
                <TableRow id={`row-${this.props.item.ID}`} key={this.props.item.ID} >
                    <TableCell> <Link to={'/details/' + this.props.item.ID}>{this.props.item.name}</Link></TableCell>
                    <TableCell> {this.props.item.dosage} </TableCell>
                    <TableCell> {this.props.item.alarms.morning ? '✔️' : ''} </TableCell>
                    <TableCell> {this.props.item.alarms.noon ? '✔️' : ''} </TableCell>
                    <TableCell> {this.props.item.alarms.evening ? '✔️' : ''} </TableCell>
                    <TableCell> {this.props.item.alarms.bed ? '✔️' : ''} </TableCell>
                    <TableCell>
                        <Button id='button-edit' color='primary' type='button' onClick={e=>this.handleEditButton(e, this.props.item.ID)} >Edit</Button>
                        <Button id='button-delete' color='secondary' type='button' onClick={e=>this.handleDeleteButton(this.props.item.ID)} >Delete</Button>
                    </TableCell>
                </TableRow>
            )
        }
    }
}
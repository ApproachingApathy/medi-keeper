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
        e.preventDefault()

        this.props.saveDispatch(this.props.item.ID, {
            name: this.state.inputValues.name || this.props.item.name,
            dosage: this.state.inputValues.dosage || this.props.item.dosage,
            alarms: {
                morning: this.state.inputValues.morning || this.props.alarms.morning,
                noon: this.state.inputValues.noon || this.props.alarms.noon,
                evening: this.state.inputValues.evening || this.props.alarms.evening,
                bed: this.state.inputValues.bed || this.props.alarms.bed,             
            }
        })

    }

    render() {
        if (this.state.editMode) {
            return (
                <TableRow id={`row-${this.props.item.ID}`} key={this.props.item.ID} >
                    <form onSubmit={e=>this.handleSubmit(e, this.props.item.ID)}>
                        <TableCell> <TextField value={this.props.item.name || ''} name='name' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <TextField value={this.props.item.dosage || ''} name='dosage' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={this.state.inputValues.morning || this.props.item.alarms.morning} name='morning' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={this.state.inputValues.noon || this.props.item.alarms.noon} name='noon' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={this.state.inputValues.evening || this.props.item.alarms.evening} name='evening' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell> <Checkbox checked={this.state.inputValues.bed || this.props.item.alarms.bed} name='bed' onChange={e=>this.handleChange(e)} /> </TableCell>
                        <TableCell>
                            <Button color='primary' type='submit' >Save</Button>
                        </TableCell>
                    </form>
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
                        <Button color='primary' onClick={e=>this.props.handleEditButton(e, this.props.item.ID)} >Edit</Button>
                        <Button color='secondary' onClick={e=>this.handleDeleteButton(this.props.item.ID)} >Delete</Button>
                    </TableCell>
                </TableRow>
            )
        }
    }
}
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, TableHead, TableRow, TableCell, Paper, Button} from '@material-ui/core'

import { remove } from '../redux/medication-list/actions'

class MedicationList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {list: this.props.globalState.list}
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                ...this.state,
                list: this.props.globalState.list
            })

        }
    }

    handleDeleteButton(uuid) {
        this.props.dispatch1(uuid)
    }

    handleEditButton(e, uuid) {
        const row = document.getElementById(`row-${uuid}`)


    }

    render() {
        let listState = this.state.list
        let rows = listState.map(item => {
            return (
                <TableRow id={`row-${item.ID}`} key={item.ID} >
                    <TableCell> <Link to={'/details/' + item.ID}>{item.name}</Link></TableCell>
                    <TableCell> {item.dosage} </TableCell>
                    <TableCell> {item.alarms.morning ? '✔️' : ''} </TableCell>
                    <TableCell> {item.alarms.noon ? '✔️' : ''} </TableCell>
                    <TableCell> {item.alarms.evening ? '✔️' : ''} </TableCell>
                    <TableCell> {item.alarms.bed ? '✔️' : ''} </TableCell>
                    <TableCell>
                        <Button color='primary' onClick={e=>this.handleEditButton(e, item.ID)} >Edit</Button>
                        <Button color='secondary' onClick={e=>this.handleDeleteButton(item.ID)} >Delete</Button>
                    </TableCell>
                </TableRow>
            )
        })

        return (
            <Paper>
                <Table stickyHeader id='medicationTable'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Dosage</TableCell>
                            <TableCell>Morning</TableCell>
                            <TableCell>Noon</TableCell>
                            <TableCell>Evening</TableCell>
                            <TableCell>Bed</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        {rows}
                    </TableHead>
                </Table>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalState:{
            list:state.medicationList.list
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: (ID) => {
            dispatch(remove(ID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationList)
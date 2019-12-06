import React from 'react'
import { connect } from 'react-redux'
import { Table, TableHead, TableRow, TableCell, Paper, Button} from '@material-ui/core'

import { remove, edit } from '../redux/medication-list/actions'
import MedicineListRow from './MedicineListRow'
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

    render() {
        let listState = this.state.list
        let rows = listState.map(item => {
            return (
                <MedicineListRow item={item} saveDispatch={this.props.dispatch2} deleteDispatch={this.props.dispatch1} key={item.ID}/>
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
        },
        dispatch2: (ID, editedObj) => {
            dispatch(edit(ID, editedObj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationList)
import React from 'react'
import { connect } from 'react-redux'
import { Card, Paper } from '@material-ui/core'

import { find, clearFound } from '../redux/medication-list/actions'

class MedicationDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatch1(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) return null
        if (this.props.found && this.props.found[0]) {
            fetch(`https://api.fda.gov/drug/label.json?search=brand_name=${this.props.found[0].name}`)
            .then(resolution => resolution.json())
            .then(translated => {
                if (!translated.error) this.setState({
                    ...this.state,
                    info: translated.results[0]
                })
            })
            .catch()
        }
    }

    componentWillUnmount() {
        this.props.dispatch2()
    }

    render() {
        let details = () => {
            if (this.props.found && this.props.found[0]) {
                return (
                    <>
                        <h2> {'Labeling Information for ' + this.props.found[0].name} </h2>
                        <a href={`https://www.drugs.com/search.php?searchterm=${this.props.found[0].name}`}>Look for this on Drugs.com</a>
                        <Paper>
                            {this.state.info ? null : <p>Couldn't find item, please ensure that the item's name is spelled correctly</p>}
                            <Card>
                                <h3>Information</h3>
                                <p>
                                    {this.state.info ? this.state.info.patient_medication_information : null}
                                </p>
                            </Card>
                            <Card>
                                <h3>Warning</h3>
                                <p>
                                    {this.state.info ? this.state.info.boxed_warning: null}
                                </p>
                            </Card>
                        </Paper>
                    </>
                )
            } else {
                return (
                    <h2>Couldn't find item.</h2>
                )
            }
        }
        return (
            <>
                {details()}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        found: state.medicationList.found
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: (id) => {
            dispatch(find(id))
        },
        dispatch2: () => {
            dispatch(clearFound())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationDetails)

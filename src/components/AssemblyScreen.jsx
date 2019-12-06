import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

class AssemblyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {list: this.props.globalState.list, view:0}
    }

    render() {
        let item = this.state.list[this.state.view]
        return (
            <div className="assembly-screen">
                <div className="title">
                    <h1>{item.name} </h1>
                </div>
                <div className="times">
                    <div className="times-section">
                        <h2>
                            {item.alarms.morning ? '✔️' : '🅧'}
                        </h2>
                    </div>
                    <div className="times-section">
                        <h2>
                            {item.alarms.noon ? '✔️' : '🅧'}
                        </h2>
                    </div>
                    <div className="times-section">
                        <h2>
                            {item.alarms.evening ? '✔️' : '🅧'}
                        </h2>
                    </div>
                    <div className="times-section">
                        <h2>
                            {item.alarms.bed ? '✔️' : '🅧'}
                        </h2>
                    </div>
                </div>
                <div className="control">
                    <Button>Next</Button>
                    <Button>Previous</Button>
                </div>

            </div>
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

export default connect(mapStateToProps)(AssemblyScreen)


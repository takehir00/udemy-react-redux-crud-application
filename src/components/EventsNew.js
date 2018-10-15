import React, {Component} from 'react';
import {connect} from 'react-redux'

import '../App.css';


class EventsNew extends Component {
    render() {
        return (
            <React.Fragment>
                <div>foo</div>
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = ({postEvent})

export default connect(null, null)(EventsNew)

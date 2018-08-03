import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { addToCounter } from '../actions';
class MainApp extends Component {
    render() {
        return (

            <View

            >
                <Text>{this.props.count}</Text>

                <Button
                    title='Click to increment'
                    onPress={() => this.props.addToCounter} />

            </View>
        )
    }
}

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.addToCounter() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch) {
    return {
        addToCounter: () => dispatch({
            type
                :
                "ADD_TO_COUNTER"
        })
    }
}

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
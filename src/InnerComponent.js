import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { store } from './store';
import {types} from './actions';
import {connect} from 'react-redux';
// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.DECREMENT })
store.dispatch({ type: types.DECREMENT })

class InnerComponent extends React.Component {
    render() {
        return (
            <View
                style={{ marginTop: 100 }}
            >
                <Text style={{ fontSize: 100 }}>
                    {this.props.count}
                </Text>

                <Button
                title='Click to increment'
                onPress={() => this.props.add()} />

            <Button
                title='Click to decrement'
                onPress={() => this.props.sub()} />

            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        add:()=> dispatch({ type: types.INCREMENT }),
        sub:()=> dispatch({ type: types.DECREMENT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InnerComponent)
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { store } from './store';
import {types} from './actions';
// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.DECREMENT })
store.dispatch({ type: types.DECREMENT })

export default class InnerComponent extends React.Component {
    render() {
        return (
            <View
                style={{ marginTop: 100 }}
            >
                <Text style={{ fontSize: 100 }}>
                    {store.getState().count}
                </Text>

                {/* <Button
                title='Click to increment'
                onPress={() => store.dispatch({ type: types.INCREMENT })} />

            <Button
                title='Click to decrement'
                onPress={() => store.dispatch({ type: types.DECREMENT })} /> */}

            </View>
        )
    }
}

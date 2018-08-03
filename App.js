import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import { types } from './src/actions';
import { Provider } from 'react-redux';
import {store} from './src/store';
import InnerComponent from './src/InnerComponent';



// Calling `store.getState()` returns our state object
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
               <InnerComponent/>
            </Provider>
        )
    }
}



import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/configureStore'
import MainApp from './src/components/MainApp';


export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View
                style={{marginTop:55,flex:1}}
                >
                    <MainApp />
                </View>
            </Provider>
        );
    }
}
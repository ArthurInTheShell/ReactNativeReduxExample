A sample project following tutorial from:

~~https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29~~ (would be good to learn middleware, but not for beginner)

~~https://medium.com/react-native-training/bitcoin-ripple-ethereum-price-checker-with-react-native-redux-e9d076037092~~ (the code is broken)

~~https://medium.com/@pavsidhu/using-redux-with-react-native-9d07381507fe~~ (Code not complete)

http://www.reactnativeexpress.com/redux (useful)

08/02/2018
Conclusion in making this react native redux app:
Redux is essentially a one for all state controll tool.
The first example in http://www.reactnativeexpress.com/redux shows this property.
I updated the code in this module to get to this basic example to work.
Gradually abstracting the component from the beginning file is useful.

The most important point of this is to allow component to update whenever the overall state changed.
Therefore we need to use mapStateToProps and mapDispatchToProps to implement the re-render component functionality.
This is a point where I can't find in many tutorial since they assume you knew it.


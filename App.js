import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    isAppReady: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'cubano-regular': require('./assets/fonts/cubano-regular.ttf'),
      'bariol-regular': require('./assets/fonts/bariol-regular.ttf'),
      'bariol-bold': require('./assets/fonts/bariol-bold.ttf')
    });
    this.setState({ isAppReady: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isAppReady && (
            <Text style={styles.text}>Hello Delivery!</Text>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'cubano-regular',
  }
});

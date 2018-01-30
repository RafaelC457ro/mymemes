import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Toolbar } from './components/Toolbar'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#eee',
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
      </View>
    )
  }
}
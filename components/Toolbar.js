import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from './icons/Logo'
import { Search } from './icons/Search'

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 56,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 6,
      paddingRight: 6
    }
})

export class Toolbar extends React.Component {
    render() {
        return <View style={styles.container} elevation={4}>
            <Logo />
            <Search />
          </View>
    }
}
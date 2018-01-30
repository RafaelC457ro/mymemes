import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Svg, Path} from 'react-native-svg'
/*
Search Icon by Niklas Bäversten from the Noun Project
*/

export class Search extends React.Component {
  render() {
    return <View>
        <Svg height="25" width="25" viewBox="0 0 249 249">
          <Path fill="#000" fillRule="nonzero" d="M247 232.4l-68.2-67.3c14.4-17.4 23-39.8 23-64.2C201.8 45.2 156.6 0 100.9 0S0 45.2 0 100.9s45.2 100.9 100.9 100.9c24.2 0 46.3-8.5 63.7-22.6l68.4 67.5c1.9 1.9 4.5 2.9 7 2.9 2.6 0 5.2-1 7.1-3 3.9-4 3.9-10.3-.1-14.2zM20 100.9C20 56.3 56.3 20 100.9 20c44.6 0 80.9 36.3 80.9 80.9 0 44.6-36.3 80.9-80.9 80.9-44.6 0-80.9-36.3-80.9-80.9z" />
        </Svg>
      </View>
  }
}
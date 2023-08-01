import { observer } from 'mobx-react-lite'
import React, { } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Splash = observer(
  () => {
    return (
      <View style={styles.container}>
        <Text style={{}}>Splash</Text>

        <View
          style={{}}></View>
      </View>
    )
  })

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});


export default Splash


import React, { } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { getSystemName } from 'react-native-device-info';
import {
  RFValue
} from '@codedoc126/react-native-codedoc-utils'

const HomePage = () => {

  getSystemName
  return (
    <View style={styles.container}>
      <Text style={[styles.homepPageText, {
        fontSize: RFValue(22),
      }]}>HomePage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  homepPageText: {
    color: 'black'
  }
});

export default HomePage;

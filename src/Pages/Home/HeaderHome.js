import * as React from 'react';
import {Text, View} from 'react-native';

export const HeaderHome = ({navigation}) => {
  return (
    <View
      style={{
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{textAlign: 'center', flex: 1, fontSize: 16}}>Home</Text>
      </View>
    </View>
  );
};

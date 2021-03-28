import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
// import {StackActions} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const HeaderDetail = ({navigation, user}) => {
  //   React.useEffect(() => {
  //     if (ticker) {
  //       if (ticker[signal?.fromCoin?.name]) {
  //         // console.log('>>>>>>>>>>>', ticker[signal?.fromCoin?.name]['lastPrice']);
  //         setCurrentPrice(ticker[signal?.fromCoin?.name]['lastPrice']);
  //       }
  //     }
  //     return () => {};
  //   }, [ticker]);

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
        // marginTop: 200,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 45,
            height: 45,
            borderRadius: 22,
            backgroundColor: '#00000009',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="arrow-back-outline" size={25} color="#00000080" />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', flex: 1, fontSize: 16}}>
          {user?.username}
        </Text>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 45,
            height: 45,
            borderRadius: 22,
            backgroundColor: '#00000009',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons
            name="ellipsis-horizontal-circle-outline"
            size={25}
            color="#00000080"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

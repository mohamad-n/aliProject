import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';

import {pallet} from '../../_helper';

export const ProfilePage = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Profile Page </Text>
    </View>
  );
};

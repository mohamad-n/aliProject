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
import {HeaderDetail} from './HeaderDetail';
export const DetailPage = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <HeaderDetail user={user} navigation={navigation} />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Name : </Text>
          <Text style={{fontSize: 15}}>{user?.name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Email : </Text>
          <Text style={{fontSize: 15}}>{user?.email}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Company : </Text>
          <Text style={{fontSize: 15}}>{user?.company?.name}</Text>
        </View>
      </View>
    </View>
  );
};

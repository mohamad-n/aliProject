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

import {userService} from '../../_service';
import {pallet} from '../../_helpers';

import {LoaderContext} from '../../Providers';

import {HeaderHome} from './HeaderHome';
export const HomePage = ({navigation}) => {
  const {setIsLoading} = React.useContext(LoaderContext);

  const [UserList, setUserList] = React.useState([]);

  const initialApp = async () => {
    try {
      setIsLoading(true);
      let data = await userService.list();

      //   console.log(data);
      setUserList(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    initialApp();
    return () => {};
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={() => navigation.navigate('Detail', {user: item})}>
        <View style={{flexDirection: 'column', paddingHorizontal: 10, flex: 1}}>
          <Text numberOfLines={3} style={{flex: 2, fontSize: 18}}>
            {item.name}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: pallet.disbaleGray,
              alignSelf: 'flex-end',
            }}>
            {item.username}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <HeaderHome navigation={navigation} />
      <FlatList
        legacyImplementation={true}
        style={{flex: 0.8}}
        data={UserList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        extraData={null}
      />

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.buttons, {backgroundColor: `${pallet.red}30`}]}>
          <Text style={[styles.text, {color: pallet.red}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttons}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  item: {
    // flex: 1,
    // marginRight: 10,
    // marginLeft: 10,
    padding: 20,
    // paddingLeft: 10,
    // paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: '#00000010',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
  },
});

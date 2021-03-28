import * as React from 'react';
import {Button, Text, View, ActivityIndicator, Dimensions} from 'react-native';

let LoaderContext = React.createContext();

let LoaderProvider = ({children}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const contextValue = {
    setIsLoading: setIsLoading,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {!isLoading ? null : (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            elevation: 3,
            zIndex: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: 100,
              height: 100,
              backgroundColor: '#ffffff',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <ActivityIndicator size="small" color="#0000ff" style={{}} />
            <Text>Loading</Text>
          </View>
        </View>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

export {LoaderContext, LoaderProvider};

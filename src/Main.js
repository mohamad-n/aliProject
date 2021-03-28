import * as React from 'react';
import {LoaderProvider} from './Providers/Loader.Provider';
import Navigator from './Navigator';

export const Main = () => {
  return (
    <LoaderProvider>
      <Navigator />
    </LoaderProvider>
  );
};

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer} from '@react-navigation/native';

import { store, persistor } from './src/store';

export default () => {
  return(
    <Provider store={store}>
      <PersistGate
      loading={null}
      persistor={persistor}
      >
        <NavigationContainer>
          
        </NavigationContainer>

      </PersistGate>
    </Provider>
  );
}
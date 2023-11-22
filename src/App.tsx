import React from 'react';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

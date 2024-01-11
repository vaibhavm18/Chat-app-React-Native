import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {Provider} from 'react-redux';
import MainStack from './MainStack';
import {store} from './app/store';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

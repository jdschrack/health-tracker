import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/appStore';
import Theme from './components/theme/Theme';

import AppRouter from './components/router/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <AppRouter />
      </Theme>
    </Provider>
  );
}

export default App;

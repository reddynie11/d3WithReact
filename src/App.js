import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import HeaderComponent from './components/Header';
import SelectComponent from './components/Select';
import BarChart from './components/BarChart';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent />
        <Route path='/' component={SelectComponent} />
        <Switch>
        <Route path='/:id' component={BarChart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

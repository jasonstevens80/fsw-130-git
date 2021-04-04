import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import PretzelContainer from './components/PretzelContainer'
import HooksPretzelsContainer from './components/HooksPretzelsContainer'
import BeerContainer from './components/beerContainer'
import HooksBeerContainer from './components/HooksBeerContainer'
import NutsContainer from './components/nutsContainer'
import HooksNutsContainer from './components/HooksNutsContainer'


function App() {
  return (
    <Provider store ={store}>
    <div className="App">
    <PretzelContainer/>
    <HooksPretzelsContainer />
    <NutsContainer/>
    <HooksNutsContainer/>
    <BeerContainer/>
    <HooksBeerContainer />
    </div>
    </Provider>
  );
}

export default App;

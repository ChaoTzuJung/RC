
import React from 'react';
import {TabRouter,LogicStack,DrawerRouter,} from './Router';
import Search from './components/Search'
import Searcher from './components/Searcher'
import GoPpt1 from './components/GoPpt1'




class App extends React.Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator && this.navigator.dispatch({ type: 'Navigate', TabRouter, params });
  }
  render() {
    return (
      <DrawerRouter ref={nav => { this.navigator = nav; }} />
    );
  }
}

export default App;
import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'
import EditBook from './src/components/EditBook';
import Home from './src/components/Home';

const Routes = () => (
  <Router >
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar={true} initial type='replace'/>
      <Scene key="editBook" component={EditBook}  hideNavBar={true} type='replace'/>
    </Stack>
  </Router>
);

export default Routes
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Root } from 'native-base';
import Home from './src/components/Home';
import Routes from './routes';

export default props => (
  <Root>
    <Routes />
  </Root>
)
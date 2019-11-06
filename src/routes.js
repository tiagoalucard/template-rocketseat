import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './config/ReactotronConfig';
import { StatusBarColor, TextColor } from './helpers/colors';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: StatusBarColor,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: TextColor,
      },
    }
  )
);

export default Routes;

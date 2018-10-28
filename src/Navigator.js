import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import AppTabBar from './containers/AppTabBar'

import Login from './screens/Login'
import Home from './screens/Home'
import Menu from './screens/Menu'
import OurStories from './screens/OurStories'
import ContactUs from './screens/ContactUs'

const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: 'The menu'
      }
    },
    OurStories: {
      screen: OurStories,
      navigationOptions: {
        title: 'Our stories'
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        title: 'Contact us'
      }
    },
  },
  {
    tabBarComponent: AppTabBar
  }
)

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    TabsNavigation
  }
)

export default AppNavigator

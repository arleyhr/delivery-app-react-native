import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Login from './screens/Login'
import Home from './screens/Home'
import Menu from './screens/Menu'
import OurStories from './screens/OurStories'
import ContactUs from './screens/ContactUs'

const TabsNavigation = createBottomTabNavigator({
  Home,
  Menu,
  OurStories,
  ContactUs
})

const AppNavigator = createStackNavigator({
  Login,
  TabsNavigation
})

export default AppNavigator

import React from 'react'
import PropTypes from 'prop-types'

import { TabsContainer, TabButton, TabLabel } from './styles'

class AppTabBar extends React.Component {
  renderTabBarButton(route, idx) {
    const {
      navigation,
      getLabelText
    } = this.props

    const currentIndex = navigation.state.index
    const label = getLabelText({ route, focused: currentIndex === idx, index: idx })
    return (
        <TabButton
          onPress={() => {
            if (currentIndex != idx) {
              navigation.navigate(route.routeName)
            }
          }}
          key={route.routeName}
          actived={currentIndex === idx}
        >
          <TabLabel actived={currentIndex === idx}>
            {label}
          </TabLabel>
        </TabButton>
    )
  }
  render () {
    const { navigation } = this.props
    const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this))
    return (
      <TabsContainer>
        {tabBarButtons}
      </TabsContainer>
    )
  }
}

AppTabBar.propTypes = {
  navigation: PropTypes.object,
  getLabelText: PropTypes.func
}

export default AppTabBar

import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native'
import {
	Container,
	Button,
	Label
} from './styles'

import withState from './state'

function CustomButton({
	text,
	handlePressIn,
	handlePress,
	handlePressOut,
	secondary,
	active
}) {
	return (
		<Container>
			<TouchableWithoutFeedback
				onPressIn={handlePressIn}
				onPressOut={handlePressOut}
			>
				<Button secondary={secondary} pressed={active}>
					<Label>{text}</Label>
				</Button>
			</TouchableWithoutFeedback>
		</Container>
	)
}

CustomButton.defaultProps = {
	secondary: false
}

CustomButton.propTypes = {
	secondary: PropTypes.bool,
	active: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	handlePressIn: PropTypes.func.isRequired,
	handlePressOut: PropTypes.func.isRequired,
	handlePress: PropTypes.func.isRequired
}

export default withState(CustomButton)
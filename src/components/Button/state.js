import { withState, withHandlers, compose } from 'recompose'

const isActive = withState('active', 'setActive', false)

const funcs = withHandlers({
	handlePressIn: props => e => {
		props.setActive(true)
	},
	handlePressOut: props => e => {
		props.setActive(false)
		props.handlePress()
	}
})

const enhance = compose(isActive, funcs)

export default enhance
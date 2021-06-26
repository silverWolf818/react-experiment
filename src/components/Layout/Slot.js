import {createElement, Fragment, useContext} from 'react'
import {LayoutContext} from './LayoutContext'

const Slot = props => {
    const context = useContext(LayoutContext)
    const {name, component, ...rest} = props
    const template = context[name]
    const renderChildren = template ? template.props.children : props.children

    if (!renderChildren) return null

    if (component) {
        return createElement(component, rest, renderChildren)
    }

    return createElement(Fragment, rest, renderChildren)
}

export default Slot
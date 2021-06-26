import React from 'react'
import Template from './Template'
import {LayoutContext} from './LayoutContext'

export function Page(props) {
    const {layout, children} = props
    const templates = getTemplate(children)

    const renderLayout = () => {
        if (layout) {
            return React.createElement(layout)
        }
        throw new Error('not found layout!')
    }

    return (
        <LayoutContext.Provider value={templates}>
            {renderLayout()}
        </LayoutContext.Provider>
    )
}

function getTemplate(template) {
    if (Object.prototype.toString.call(template) === '[object Object]') {
        if (template.type && template.type.displayName === Template.displayName) {
            return {
                [template.props.slot]: template
            }
        }
        return {}
    } else if (Array.isArray(template)) {
        return template.reduce((accumulator, currentValue) => Object.assign({}, accumulator, getTemplate(currentValue)), {})
    }
    return {}
}
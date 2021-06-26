import React from 'react';

export function Page(props) {
    const {layout, children, ...rest} = props;
    console.log(children);
    const renderLayout = () => {
        return React.createElement(layout, rest, children)
    }
    return (
        <>
            {renderLayout()}
        </>
    )
}

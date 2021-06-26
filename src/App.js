import React, {Suspense} from 'react'
const List = React.lazy(() => import('./List'))
const Container = React.lazy(() => import('./Container'))

function App() {
    const toggle = false
    return (
        <div className="App">
            <Suspense fallback={<div>loading</div>}>
                {
                    toggle ? <List/> : <Container />
                }
            </Suspense>
        </div>
    )
}

export default App

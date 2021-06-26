import {Page} from '../components/Layout/Page'
import HomeLayout from './HomeLayout'
import Template from '../components/Layout/Template'
import List from '../List'
import Container from '../Container'

const Layout = () => {
    return (
        <Page layout={HomeLayout}>
            <Template slot='list'>
                <List />
            </Template>
            <Template slot='box'>
                <Container />
            </Template>
        </Page>
    )
}

export default Layout

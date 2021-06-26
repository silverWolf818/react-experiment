import Slot from '../../components/Layout/Slot'
import Hello from '../../Hello'

const HomeLayout = ()=> {
    return (
        <div className="home-layout">
            <div className="left">
                <div className="text">
                    <Slot name="list" component={Hello} />
                </div>
            </div>
            <div className="right">
                <div className="box">
                    <Slot name="box" component={'h1'}/>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout

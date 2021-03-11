import { Button } from '@material-ui/core'
import { observer, inject } from 'mobx-react'
import NavBar from './NavBar'

function Home(props) {

    return (
        <div>
            <NavBar />
        </div>
    );
}

export default inject('userStore')(observer(Home));

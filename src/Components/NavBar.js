import { Button } from '@material-ui/core'
import { observer, inject } from 'mobx-react'
import './NavBar.css'


function NavBar(props) {
    const SignOut = () => {
        props.userStore.signOut()
        window.location.reload()
    }
    return (
        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="/" onClick={SignOut}className="right" >LogOuT</a>
        </div>

    );
}

export default inject('userStore')(observer(NavBar));

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import LogIn from "./LogInPage/LogIn"
import Home from "./Components/Home"
function App(props) {
  props.userStore.checkIfSigned()
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() =>  props.userStore.signed ? <Home /> : <LogIn />} />
          <Route render={() => <div>Page Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default inject('userStore')(observer(App));

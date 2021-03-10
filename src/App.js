import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import LogIn from "./LogInPage/LogIn"
function App(props) {
  props.userStore.SignInIn("aubida@gmasil.com", "123456")
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <LogIn />} />
          <Route render={() => <div>Page Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default inject('userStore')(observer(App));

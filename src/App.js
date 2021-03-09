
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import LogIn from "./LogInPage/LogIn"
function App() {
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

export default App;

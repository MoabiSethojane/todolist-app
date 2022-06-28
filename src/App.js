
import './App.css';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Add from "./components/Add"
import Edit from "./components/Edit"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
<h1>To Do List</h1>
<Router>
  <Switch>
  <Route exact path="/" component={SignIn}>
    
    </Route>
    <Route  path="/sign-up" component={SignUp}>
    
    </Route>
    <Route  path="/home" component={Home}>
    
    </Route>
    <Route path="/add" component={Add}>
    </Route>
    <Route path="/Edit/:uid" component={Edit}>
    </Route>
  </Switch>
</Router>

    </div>
  );
}

export default App;

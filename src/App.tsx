import DropDown from './DropDown'
import * as Arrays from './DropDownArrays'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const first = '-select one-'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/states'>
          <DropDown arr={Arrays.States} first={first} />
        </Route>
        <Route path='/people'>
          <DropDown arr={Arrays.Composers} first={first} />
        </Route>
        <Route path='/animals'>
          <DropDown arr={Arrays.Animals} first={first} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

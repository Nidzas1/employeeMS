import './App.css';
import Home from './comps/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './comps/pages/About';
import Navbar from './comps/Navbar.tsx';
import Errpage from './comps/pages/Errpage';
import Footer from './comps/Footer.tsx';
import Employees from './comps/pages/Employees';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="*">
            <Errpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;

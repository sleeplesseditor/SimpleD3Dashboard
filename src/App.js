import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/Spinner/LazyLoader';
import Header from './components/Header/Header';
import './App.scss';

const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(Dashboard)} />
        </Switch>
    </Router>
  );
}

export default App;
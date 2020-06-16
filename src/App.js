import React from 'react';
import './styles/styles.scss';
import { Switch, Route } from 'react-router-dom';
import Layout from './container/Layout';
import Main from './components/Main';
import Trending from './components/Trending/Trending';
import Discover from './components/Discover/Discover';
import User from './components/User/User';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/profile/:id'  component={User}/>
          <Route path='/discover' component={Discover}/>
          <Route path='/trending' component={Trending}/>
          <Route path='/' exact component={Main}/>
        </Switch>
      </Layout>
  );
}



export default App;

import React from 'react';
import './stylesConfig/imports.scss';
import { Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage/HomePage';
import Trending from './components/Trending/Trending';
import Discover from './components/Discover/Discover';
import User from './components/User/User';
import Music from './components/Music/Music';
import Tag from './components/Tag/Tag';


function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/tag/:id' component={Tag}/>
          <Route path='/music/:id' component={Music}/>
          <Route path='/profile/:id'  component={User}/>
          <Route path='/discover' component={Discover}/>
          <Route path='/trending' component={Trending}/>
          <Route path='/' exact component={HomePage}/>
        </Switch>
      </Layout>
  );
}



export default App;

import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
// import { About } from './pages/About.js'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import Writer from './pages/Writer'
import { FooterPage } from './components/FooterPage'

class App extends Component {
  render() {
    return (
      <div className='dinamic-container'>
        <div className='wrapper'>
          <React.Fragment>
            <Router>
              <NavigationBar />
              <Header />
              <Layout>
                <Switch>
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/writer' component={Writer} />
                  {/* <Route exact path='/about' component={About} /> */}
                  <Redirect from='/' to='/home' />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </Layout>
            </Router>
          </React.Fragment>
        </div>
        <div className='stickyfooter'>
          <FooterPage />
        </div>
      </div>
    )
  }
}

export default App

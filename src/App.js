import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import TripForm from './components/TripForm'
import DictionaryContainer from './containers/DictionaryContainer'


class App extends React.Component {

componentDidMount(){
  this.props.getCurrentUser()
}

  render() {
    return (
        <div className='App'>
          <Container>
            <div id='main_head'>
              <h1>come on kayak</h1>
            </div>
            <NavBar />
            <Route exact path='/dictionary' component={DictionaryContainer} />

            <Route path='/newtrip' component={TripForm}/>

            <Switch>
              <Route exact path='/dictionary' render={null} />
              <Route component={Home} />
            </Switch>



          </Container>
        </div>
    );
  }
}


export default App ;

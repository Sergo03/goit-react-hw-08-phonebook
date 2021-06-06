import React, { Component,Suspense,lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container/Container'
import AppBar from './Components/AppBar'
import * as authOperations from './redux/Auth/auth-operations'
import { connect } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute'
import PublickRoute from './Components/PublickRoute'

const HomeView = lazy(() => import('./Components/View/Home'))
const RegisterView = lazy(() => import('./Components/View/RegisterView'))
const LoginView = lazy(() => import('./Components/View/LoginView'))
const Contacts = lazy(() => import('./Components/View/Contacts'))


class App extends Component{
  componentDidMount() {
    this.props.onGetCurrentUser();
  }


  render() {
 
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublickRoute path="/register" restricted component={RegisterView} redirectTo="/contacts" />
            <PublickRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
            <PrivateRoute path="/contacts" component={Contacts} redirectTo="/login" />
          </Switch>
        </Suspense>
      </Container>

    )
  }
}
const mapDispatchToProps= {
  onGetCurrentUser:authOperations.getCurrentUser
}

export default connect(null,mapDispatchToProps)(App) ;
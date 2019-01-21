import React, {Component} from 'react';
import {
    BrowserRouter as Router, Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import NavigationBar from './pages/NavigationBar/NavigationContainer'
import Login from './pages/Login/LoginContainer'
class App extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/Index" component={NavigationBar} />
                    <Redirect from="/" to="/Login" />
                </Switch>
            </Router>
        );
    }
}

export default App;

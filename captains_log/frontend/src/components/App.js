import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {} from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './pages/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import Homepage from './pages/containers/Homepage';
import TeamSheetContainer from './pages/containers/TeamSheetContainer';
import PlayersPage from './pages/containers/PlayersPage';



import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
}


class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    render() {
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <PrivateRoute exact path="/teambuilder" component={TeamSheetContainer} />
                                <PrivateRoute exact path="/players" component={PlayersPage} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/home" component={Homepage} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Header />
            <Nav />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => (
                        <Main
                            history={this.props.history}
                        />
                    )}
                />
            </Switch>
        </div>
        );
    }
}

export default withRouter(App);

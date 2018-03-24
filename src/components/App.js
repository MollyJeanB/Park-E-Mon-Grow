import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import { store } from '../store';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
    console.log("mapStateToProps");
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        redirectTo: state.common.redirectTo
    }};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
});

class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            // this.context.router.replace(nextProps.redirectTo);
            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
        //const token = window.localStorage.getItem('jwt');

        //this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

    render() {
        if (this.props.appLoaded) {
            return (
                <div>
                    <Header>
                        appName={this.props.appName}

                        <Route exact path="/" component={Home}/>
                    </Header>
                </div>
            );
        }
        return (
            <div>
                <Header>
                    appName={this.props.appName}
                    currentUser={this.props.currentUser} />
                </Header>
                <div>Hello Women Who Code from  else!</div>
            </div>
        );
    }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
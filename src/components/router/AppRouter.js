import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../login/Login';
import Home from '../home/Home';
import VerifyLogin from '../login/VerifyLogin';
import Profile from '../profile/Profile';
import NotFound from '../common/errors/NotFound';

const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={() => (<h1>sign up</h1>)}/>
                <Route path="/dashboard">
                    <GuardedRoutes/>
                </Route>
                <RouteRedirect authInfo={props.authStatus} path="/" redirectPath="/login">
                    <Redirect to="/dashboard"/>
                </RouteRedirect>
                <Route path="/404" componet={NotFound}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}


///Once the dashboard layout is created this will need to be moved over there and the dashboard component returned
const GuardedRoutes = () => {
    return (
        <VerifyLogin>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={Home}/>
        </VerifyLogin>
    )
}

const RouteRedirect = ({children, authInfo, redirectPath, ...rest}) => {
    return (
        <Route {...rest} render={({location}) => (authInfo.authData.isAuthorized ? (children) : (
            <Redirect to={{pathname: redirectPath, state: {from: location}}}/>))}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    authStatus: state.authStatus
});

AppRouter.propTypes = {
    authStatus: PropTypes.shape({
        authData: PropTypes.shape({
            isAuthorized: PropTypes.bool.isRequired,
            authToken: PropTypes.string,
            authTokenExpires: PropTypes.instanceOf(Date),
            refreshToken: PropTypes.string,
            refreshTokenExpires: PropTypes.instanceOf(Date)
        }),
        isError: PropTypes.bool,
        errors: PropTypes.array
    }).isRequired
}

export default connect(mapStateToProps)(AppRouter);

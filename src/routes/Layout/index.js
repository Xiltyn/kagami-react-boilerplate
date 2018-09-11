import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
// Routes

import PublicRoute from 'utils/PublicRoute';
import asyncRoute from 'utils/asyncComponent';
import PrivateRoute from '../../utils/PrivateRoute';

const Content = asyncRoute(() => import('../Content'));
const Login = asyncRoute(() => import('../Login'));
const Signup = asyncRoute(() => import('../Signup'));
const Miss404 = asyncRoute(() => import('../Miss404'));

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
    require('../Content'); // eslint-disable-line global-require
    require('../Login'); // eslint-disable-line global-require
    require('../Signup'); // eslint-disable-line global-require
    require('../Miss404'); // eslint-disable-line global-require
}

const Layout = () => (
    <div>
        <Helmet titleTemplate="%s - Resume Writing Sucks" defaultTitle="Resume Writing Sucks" />

        <Switch>
            <PublicRoute path="/login" component={ Login } exact={ true } />
            <PublicRoute path="/signup" component={ Signup } exact={ true } />
            <PrivateRoute path="/:view?" component={ Content } exact={ true } />
            <Route component={ Miss404 } />
        </Switch>

    </div>
);

export default Layout;

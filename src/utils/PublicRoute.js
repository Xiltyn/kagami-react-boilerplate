import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthMiddleware from 'modules/auth/middleware';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    isLoggedIn: () => AuthMiddleware.isLoggedIn(),
}, dispatch);

class PublicRoute extends Component {
    static propTypes = {
        component: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        isLoggedIn: PropTypes.func.isRequired,
    };

    static defaultProps = {
        isAuthenticated: false,
    };

    constructor(props) {
        super(props);
        if (!props.isAuthenticated) {
            setTimeout(() => {
                props.isLoggedIn();
            }, 5);
        }
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            console.log('authenticated');
        } else {
            console.log('not authenticated');
        }
    }
    componentWillUnmount() {}

    render() {
        const { isAuthenticated, component, ...rest } = this.props;
        if (isAuthenticated !== null) {
            return (
                <Route
                    { ...rest }
                    render={ props => (
                        !isAuthenticated ? (
                            React.createElement(component, props)
                        ) : (
                            <Redirect
                                to={ {
                                    pathname: '/new-resume',
                                    state: { from: props.location },
                                } }
                            />
                        )
                    ) }
                />
            );
        } return null;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);

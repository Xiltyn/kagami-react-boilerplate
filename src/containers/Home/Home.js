// @flow

import React, { Component } from 'react';
import type { Dispatch, State } from '../../shared/redux.types';
import { bindActionCreators } from 'redux';
import AppMiddleware from '../../modules/app/middleware';
import { connect } from 'react-redux';

type HomeProps = {
    message:string,
    dispatchHello:(message:string) => void,
}
type HomeState = {
    scrollPosition:number,
}

const mapStateToProps = (state:State) => ({
    message: state.app.message,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
    dispatchHello: message => AppMiddleware.dispatchHello(message),
}, dispatch);

class Home extends Component<HomeProps, HomeState> {
    render() {
        const {
            message,
            dispatchHello,
        } = this.props;

        return (
            <div className="home">
                Home Page Message :: { message }

                <button onClick={ () => dispatchHello('Hello World!') }>
                    New Message
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
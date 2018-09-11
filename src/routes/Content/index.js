import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NewResume from '../../containers/NewResume/NewResume';

//const NewResume = asyncRoute(() => import('../../containers/NewResume/NewResume'));

class Content extends Component {

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <h4>Main content container with MID_LEVEL routing</h4>
                <div>HEADER</div>
                <div className={ 'content' }>
                    <Route path={ '/new-resume/:step?' } component={ NewResume } exact={ true }/>
                </div>
            </div>
        );
    }

}

export default Content;


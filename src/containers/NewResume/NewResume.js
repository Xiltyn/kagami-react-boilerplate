// ||  rws-app  ||
//
// Created @ 13:22 | 2018/06/27
// Powered by WebStorm
//
// ------------------------------
// |>   From jakubbujko with <3   <|
// ------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewResume extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
    };

    static defaultProps = {
        message: 'Default prop { message }',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            message,
        } = this.props;

        return (
            <div className={ 'new-resume' }>
                New Resume :: { message }
            </div>
        );
    }
}

export default NewResume;
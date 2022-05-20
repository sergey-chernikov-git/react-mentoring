import React, {Component} from 'react';

export class PageTitle extends Component {
    render () {
        return React.createElement(
            'h1', 
            {}, 
            'Mentoring React App!'
        )
    }
}
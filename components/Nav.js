import React from 'react';
import csjs from 'react-csjs';

@csjs`
.nav {
    position: fixed;
    margin: 2em;
    z-index: 1;
    right: 0;
    font-family: 'Gotham-Medium', sans-serifc;
    text-transform: uppercase;
    font-size: 0.9rem;
    line-height: 0.9rem;
    & ul {
        padding: 1em;
        margin: 0;
        list-style: none;
    }
    & li {
        text-align: right;
        cursor: pointer;
        color: #dfdfdf;
        margin-bottom: 0.25em;
        & a:hover  {
            color: #cfcfcf;
        }
    }
}`
export default class Nav extends React.Component {
    render() {
        let { classes, children } = this.props;
        let count = 0;
        return (
            <nav className={classes.nav}>
                <ul>
                    {children.map(item => <li key={count++}>{item}</li>)}
                </ul>
            </nav>
        )
    }
}

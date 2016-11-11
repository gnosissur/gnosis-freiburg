import React from 'react';
import csjs from 'react-csjs';
import { Link } from 'react-scroll';

@csjs`
.active {
    color: #cfcfcf;
}`
export default class NavLink extends React.Component {
    render() {
        let { classes, to, name } = this.props;
        return (
            <Link activeClass={classes.active.className} to={to} smooth={true} spy={true}>
            { name || to }
            </Link>
        )
    }
}

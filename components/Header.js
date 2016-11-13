import React from 'react';
import csjs from 'react-csjs';
import { Link, Element } from 'react-scroll';

@csjs`
.header {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 10%;
    cursor: pointer;
    background-image: url(/assets/front.jpg);
    background-position: center center;
    background-size: 70vh;
    background-repeat: no-repeat;
    & h2 {
        margin-top: -400px;
        line-height: 4.5rem;
        font-weight: 600;
    }
    & span { font-style: italic; }
}
@media (max-device-width: 1224px) {
    .header { background-size: 50vh; }
}`
export default class Header extends React.Component {
    render() {
        let { classes, title, children } = this.props;
        return (
            <div>
                <Link to="__below-header" smooth={true}>
                    <Element name="Header">
                        <header className={classes.header} />
                    </Element>
                </Link>
                <Element key="reference" name="__below-header" />
            </div>
        );
    }
}

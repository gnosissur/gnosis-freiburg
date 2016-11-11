import React from 'react';
import csjs from 'react-csjs';
import { Element } from 'react-scroll';

@csjs`
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    padding: 0 20%;
    position: relative;
    background-color: #313131;
    color: white;
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    & h2, & h3 { margin: 0; }
    & h2 { text-align: right; line-height: 6.05rem; }
    & h4 {
        line-height: 2.675rem;
        margin: 0;
        text-align: left;
    }
    & > div > div:first-of-type { padding-right: 2em; }
    & > div > div:last-of-type {
        padding-left: 2em;
        border-left: 1px solid;
        text-align: left;
    }
    & > div > div > p { margin: 0; }
    & > div > div > p:first-of-type { margin-top: 1em; }
    & a {
        color: black;
        text-decoration: none;
    }
}`
export default class Footer extends React.Component {
    render() {
        let { classes, day, month, title, children } = this.props;
        return (
            <Element name="Footer">
                <footer className={classes.footer}>
                    <div>
                        <div>
                            <h2>{day}</h2>
                            <h3>{month}</h3>
                        </div>
                        <div>
                            <h4>{title}</h4>
                            {children}
                        </div>
                    </div>
                </footer>
            </Element>
        );
    }
}

import React from 'react';
import csjs from 'react-csjs';

@csjs`
.figure {
    margin: 0;
    width: 100%;
    position: relative;
    min-height: 100vh;
    padding: 0;
    & > span {
        background-color: #bc5451;
        position: absolute;
        width: 35%;
        padding: 2em;
        bottom: -2em;
        left: 2em;
        font-size: 0.75em;
        line-height: 1.6em;
        letter-spacing: 0.05em;
        color: white;
        font-family: 'Exchange SSm 4r', Georgia, serif;
        box-shadow: 0px 10px 0px 0px #79322f;
        z-index: 100;
    }
}`
export default class Figure extends React.Component {
    render() {
        let { url, position, size, classes, children } = this.props;
        return (
            <figure className={classes.figure} style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: position || "center",
                backgroundSize: size || "cover"}}>
                { children && <span>{children}</span> }
            </figure>
        );
    }
}

import React from 'react';
import csjs from 'react-csjs';

@csjs`
.wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #313131;
    & .figure {
        top: 0;
        left: 0;
        position: absolute;
        width: 50%;
        height: 100%;
    }
    & .content {
        top: 0;
        right: 0;
        position: absolute;
        width: 50%;
        padding: 1em;
        height: 100%;
        color: white;
    }
}`
export default class FigureHalf extends React.Component {
    render() {
        let { url, position, size, classes, children } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.figure} style={{
                    backgroundImage: `url(${url})`,
                    backgroundPosition: position || "center",
                    backgroundSize: size || "cover"}} />
                <div className={classes.content}>
                    { children && <span>{children}</span> }
                </div>
            </div>
        );
    }
}

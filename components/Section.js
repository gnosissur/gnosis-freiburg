import React from 'react';
import csjs from 'react-csjs';

@csjs`
.section {
    z-index: 0;
    margin: 0;
    width: 100%;
    padding: 0 20%;
    position: relative;
    min-height: auto;
    padding-top: 8em;
    padding-bottom: 8em;
    & > p {
        margin-bottom: 1.875em;
        color: inherit;
        text-align: justify;
        & > span {
            color: white;
            background-color: #373737;
        }
    }
    & > *:first-child {
        margin: 0;
        margin-bottom: 1.25em;
        text-align: inherit;
    }
    &:nth-of-type(even) { text-align: right; }
    &:nth-of-type(odd) { text-align: left; }
}`
export default class Section extends React.Component {
    render() {
        let { classes, children, title } = this.props;
        return (
            <section className={classes.section}>
                <h3>{title}</h3>
                {children}
            </section>
        )
    }
}

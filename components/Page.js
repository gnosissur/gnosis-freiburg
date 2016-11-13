import React from 'react';
import csjs from 'react-csjs';
import { Link, Element, scrollSpy } from 'react-scroll';
import { Section, Footer} from '../components';

@csjs`
@font-face {
  font-family: 'Gotham-Medium';
  src: url('/assets/fonts/Gotham-Medium.eot');
  src: local('☺'),
        url('/assets/fonts/Gotham-Medium.woff2') format('woff2'),
        url('/assets/fonts/Gotham-Medium.woff') format('woff'),
        url('/assets/fonts/Gotham-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Exchange SSm 4r';
  src: url('/assets/fonts/Exchange.eot');
  src: local('☺'),
        url('/assets/fonts/Exchange.woff2') format('woff2'),
        url('/assets/fonts/Exchange.woff') format('woff'),
        url('/assets/fonts/Exchange.ttf') format('truetype');
}

.main {
    box-sizing: border-box;
    font-size: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Exchange SSm 4r', Georgia, serif;
    font-size: 1.375em;
    font-style: normal;
    font-weight: normal;
    line-height: 1.6em;

    & *, & *:before, & *:after {
        box-sizing: inherit;
    }

    & h1, & h2, & h3, & h4, & h5, & h6 {
        white-space: pre;
        font-family: 'Gotham-Medium', sans-serifc;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        color: inherit;
        position: relative;
        line-height: 1;
        margin: 0.3em;
        margin-bottom: 0.5em;
    }

    & h1 {
        font-size: 6em;
        &:before {
            content: '';
            position: absolute;
            width: 1em;
            height: 2px;
            background-color: black;
            left: 50%;
            margin-left: -0.5em;
            bottom: -0.25em;
        }
    }
    & h2 { font-size: 4.25em; }
    & h3 { font-size: 2.5em; }
    & h4 { font-size: 1.875em; }
    & h5 { font-size: 1.25em; }
    & h6 { font-size: 0.9375em; }

    & p::selection, & span::selection, & div::selection, & h1::selection, & h2::selection, & h3::selection, & h4::selection, & blockquote::selection, & pre::selection, & a::selection {
        background: #f7bb36;
        color: white;
    }

    & hr {
        height: 1px;
        color: transparent;
        background-color: transparent;
        border: none;
    }
}
@media (max-device-width: 1224px) {
    .main { font-size: 1em; }
}
@media (max-device-width: 1224px) and (orientation: portrait) {
    .main { font-size: 1.5em; }
}`
export default class Page extends React.Component {
    static propTypes = { scrollSpy: React.PropTypes.bool };
    static defaultProps = { scrollSpy: true };
    listen = () => scrollSpy.update();

    componentDidMount() {
        if (this.props.scrollSpy)
            window.addEventListener("resize", this.listen);
    }

    componentWillUnmount() {
        if (this.props.scrollSpy)
            window.removeEventListener("resize", this.listen);
    }

    render () {
        let { classes, children } = this.props;

        if (this.props.scrollSpy) {
            let result = [];
            let block;
            for (let item of React.Children.toArray(children)) {
                if (block && item.type === Section || item.type === Footer) {
                    result.push(<Element key={block.key} name={block.to}>{block.array}</Element>);
                    block = undefined;
                }

                if (!block && item.type === Section)
                    block = { key: item.key, to: item.props.anchor || item.props.title, array: [] };

                (block ? block.array : result).push(item);
            }
            children = result;
        }

        return (
            <main className={classes.main}>
                {children}
            </main>
        )
    }
}

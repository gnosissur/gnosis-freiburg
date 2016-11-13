import React from 'react';
import csjs from 'react-csjs';
import { Motion, spring } from 'react-motion';

@csjs`
.lightbox {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
}
.item {
    position: relative;
    width: 80%;
    height: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: row;
    & > div {
        position: relative;
        flex: 1;
        width: 50%;
    }
    & > div.image {
        box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.4);
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(335deg,rgba(105, 16, 150, 0.1),rgba(126, 132, 165, 0.1));
        }
    }
    & > div.content {
        padding: 0 50px;
        color: white;
        & h4, & h5 {
            white-space: pre-wrap;
            text-align: left;
            margin-left: 0;
        }
    }
}
@media (max-device-width: 1224px) {
    .item {
        width: 95%;
        padding: 20px 0;
        & > div.content {
            & h4, & h5 { font-size: 1em; }
            & span {
                display: block;
            }
            padding: 0 20px;
        }
    }
}
@media (max-device-width: 1224px) and (orientation: portrait) {
    .item {
        flex-direction: column;
        & > div { width: 100%; height: 50%; }
        & > div.content { padding: 20px 0; }
    }
}`
export default class Lightbox extends React.Component {
    state = { active: false }
    toggle = () => this.setState({ active: !this.state.active })
    componentWillReceiveProps(props) {
        this.setState({ active: !!props.item })
    }
    render() {
        let { classes, item, onClicked } = this.props;
        let { active } = this.state;
        return (
            <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(active ? 1 : 0) }}>
                {({ opacity }) => (
                    <section
                        className={classes.lightbox}
                        onClick={this.toggle}
                        style={{
                            opacity,
                            pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                            visibility: opacity > 0 ? 'visible' : 'hidden',
                            cursor: opacity > 0.5 ? 'pointer' : 'inherit'
                        }}>

                        {item &&
                            <Motion defaultStyle={{ scale: 0.95 }} style={{ scale: spring(active ? 1 : 0.95) }}>
                                { ({ scale }) => (
                                    <div className={classes.item} style={{ transform: `scale(${scale})`}}>
                                        <div className={classes.image} style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: item.position || 'center'
                                        }} />
                                        <div className={classes.content}>
                                            <h4>{item.title}</h4>
                                            <h5>30. Nov 19:00</h5>
                                            <span>{item.content}</span>
                                        </div>
                                    </div>
                                )}
                            </Motion>
                        }

                    </section>
                )}
            </Motion>
        )
    }
}

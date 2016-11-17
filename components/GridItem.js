import React from 'react';
import csjs from 'react-csjs';

@csjs`
.wrapper {
    cursor: pointer;
    background-size: cover;
    box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
    & h5, & h6 { white-space: pre-wrap; word-break: break-word; }
    & h6 { line-height: 1.3em; }
    & h5 {
        margin-bottom: 0.6em;
        &::after {
            content: '';
            position: absolute;
            bottom: -0.5em;
            left: calc(50% - 45%);
            width: 90%;
            height: 3px;
            background-color: white;
        }
    }
    & > div.gradient {
        width: 100%;
        height: 100%;
        background: linear-gradient(335deg,rgba(105, 16, 150, 0.1),rgba(126, 132, 165, 0.1));
    }
    & > div.content {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
        height: 100%;
        background-color: rgba(49,49,49,0.3);
        transition: all .2s;
    }
    & > div.content:hover { background-color: rgba(0,0,0,1); }
}`
export default class GridItem extends React.Component {
    render() {
        let { classes, onItemClicked } = this.props;
        let { day, month, time, title, height, image, position } = this.props.item;
        return (
            <div className={classes.wrapper} style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: position || 'center' }} onClick={() => onItemClicked(this.props.item)}>
                <div className={classes.gradient} />
                <div className={classes.content}>
                    {day && <h5>{day}. <span style={{ fontSize: '0.8em'}}>{month} {time}</span></h5>}
                    <h6>{title}</h6>
                </div>
            </div>
        )
    }
}

import React from 'react';
import csjs from 'react-csjs';

@csjs`
.lightbox {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100000;
    transition: background-color .5s;
    display: flex;
    justify-content: center;
    align-items: center;

    visibility:hidden;
    background-color: rgba(0,0,0,0);
    transition: visibility 0s linear 0.5s, background-color 0.5s linear;
}
.active {
    visibility: visible;
    background-color: rgba(0,0,0,0.8);
    transition-delay:0s;
}
.item {
    width: 60%;
    height: 100%;
    padding: 100px;
    display: flex;
    & > div {
        padding-left: 50px;
        color: white;
        flex: 1;
    }
}`
export default class Lightbox extends React.Component {
    render() {
        let { classes, item, onClicked } = this.props;
        let merged = `${classes.lightbox.className} ${item ? classes.active.className : ''}`;
        return (
            <section className={merged} onClick={onClicked}>
                { item &&
                    <div className={classes.item}>
                        <div className={classes.item} style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: item.position || 'center'
                        }} />
                        <div>
                            {item.content}
                        </div>
                    </div>
                }
            </section>
        )
    }
}

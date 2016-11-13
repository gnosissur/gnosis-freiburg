import React from 'react';
import csjs from 'react-csjs';
import StackedGrid from '../components/StackedGrid';

@csjs`
.section {
    z-index: 0;
    margin: 0;
    width: 100%;
    position: relative;
    min-height: auto;
    padding: 0 15%;
    background-color: #313131;
    color: white;
    & > div {
        position: relative;
        background-color: #313131;
        top: -3em;
    }
    & .item {
        cursor: pointer;
        background-size: cover;
        overflow: hidden;
        box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.4);
    }
}
@media (max-device-width: 1224px) {
    .section { padding: 0 5%; }
}`
export default class Grid extends React.Component {
    render() {
        let { classes, children, title, data, control: Control, onItemClicked } = this.props;
        return (
            <section className={classes.section}>
                <StackedGrid
                    occupySpace={true}
                    margin={0}
                    columns={media(2, 3)}>
                    {data.map(item => <Control key={item.title} height={item.height} item={item} onItemClicked={onItemClicked}/>)}
                </StackedGrid>
            </section>
        )
    }
}

function media(mobile, desktop) {
    return window.matchMedia("(max-device-width: 1224px)").matches ? mobile : desktop;
}

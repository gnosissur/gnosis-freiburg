import React from 'react';
import csjs from 'react-csjs';
import { CSSGrid, layout } from 'react-stonecutter';

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
        background-color: #313131;
        top: -3em;
    }
    & .item {
        cursor: pointer;
        background-size: cover;
        overflow: hidden;
        box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.4);
    }
}`
export default class Grid extends React.Component {
    state = { width: document.body.clientWidth - document.body.clientWidth * 0.3}
    componentDidMount() {
        window.addEventListener('resize', event => {
            let width = document.body.clientWidth;
            this.setState({ width: width - width * 0.3 })
        });
    }
    render() {
        let { classes, children, title, data, control, onItemClicked, active } = this.props;
        let Control = control;
        let gutter = 0;
        let columns = 3;
        let width = this.state.width / columns - gutter;

        return (
            <section className={classes.section}>
                <CSSGrid
                    component="div"
                    columns={columns}
                    columnWidth={width}
                    gutterWidth={gutter}
                    gutterHeight={gutter}
                    layout={layout.pinterest}
                    duration={0}
                    easing="none" >

                    { data.map(item => (
                        <div key={item.title} itemHeight={item.height} className={classes.item} style={{
                            width: width,
                            height: item.height,
                            backgroundImage: `url(${item.image})`,
                            backgroundPosition: item.position || 'center'
                        }} onClick={() => onItemClicked(item)}>
                            <Control item={item} active={active} />
                        </div>
                    )) }

                </CSSGrid>

            </section>
        )
    }
}

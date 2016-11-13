import React from 'react';

export default class StackedGrid extends React.Component {
    static propTypes = {
        occupySpace: React.PropTypes.bool,
        columns: React.PropTypes.number,
        margin: React.PropTypes.number
    }
    static defaultProps = {
        occupySpace: true,
        columns: 3,
        margin: 0
    }
    render() {
        let { children, columns, margin, occupySpace } = this.props;
        let column = 0;
        let columnHeights = new Array(columns).fill(0);
        let grid = React.Children.toArray(children).map(child => {
            let index = occupySpace
                ? columnHeights.indexOf(Math.min(...columnHeights))
                : index = column++ % columns;
            let width = 100 / columns;
            let left = 100 * index;
            let offset = (index + 1) * margin;
            let top = columnHeights[index] + margin;
            let style = {
                position: 'absolute',
                transform: `translate3d(${margin ? `calc(${left}% + ${offset}px)` : `${left}%`},${top}px,0)`,
                width: `${margin ? `calc(${width}% - ${margin}px)` : `${width}%`}`,
                height: child.props.height
            };
            columnHeights[index] += child.props.height + margin;
            return <div key={child.key} style={style}>{child}</div>;
        });
        let height = Math.max(...columnHeights);
        return (
            <div style={{ padding: `0 ${margin}px ${margin}px 0`}}>
                <div style={{ position: 'relative', width: '100%', height }}>{grid}</div>
            </div>
        );
    }
}

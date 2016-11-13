import React from 'react';
import csjs from 'react-csjs';

export default class StackedGrid extends React.Component {
    static propTypes = {
        occupySpace: React.PropTypes.bool,
        columns: React.PropTypes.number,
        margin: React.PropTypes.number
    }
    static defaultProps = {
        occupySpace: true,
        columns: 3,
        margin: 10
    }
    render() {
        let { children, columns, margin, occupySpace } = this.props;
        let column = 0;
        let columnHeights = new Array(columns).fill(0);
        let columnWidth = 100 / columns;
        let grid = React.Children.toArray(children).map(child => {
            let index = occupySpace
                ? columnHeights.indexOf(Math.min(...columnHeights))
                : index = column++
            if (column === columns) column = 0;
            let left = 100 * index / columns;
            let top = columnHeights[index] + margin;
            columnHeights[index] += child.props.height + margin;
            return (
                <div key={child.key} style={{
                    position: 'absolute',
                    left: `calc(${left}% + ${margin / 2}px)`,
                    top,
                    width: `calc(${columnWidth}% - ${margin}px)`,
                    height: child.props.height }}>
                    {child}
                </div>
            )
        });
        let height = Math.max(...columnHeights);
        return (
            <div style={{ padding: `0 ${margin / 2}px ${margin}px ${margin / 2}px`}}>
                <div style={{ position: 'relative', width: '100%', height }}>
                    {grid}
                </div>
            </div>
        );
    }
}

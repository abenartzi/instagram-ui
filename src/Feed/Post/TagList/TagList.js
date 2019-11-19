import React, {Component} from 'react';
class TagList extends Component {
    render() {
        return (
            <div>
                {this.props.tags.map(tag => {
                    return <div>#{tag}</div>
                })}
            </div>
        );
    }
}

export default TagList;
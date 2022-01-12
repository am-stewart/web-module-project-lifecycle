import React from 'react';

class Follower extends React.Component {
  render() {
    console.log('follower props', this.props)
    return (
      <div>
        <img width='150' src={this.props.item.avatar_url}/>
        <p>{this.props.item.login}</p>
      </div>

    )
  }
}

export default Follower;
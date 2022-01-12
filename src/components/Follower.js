import React from 'react';

class Follower extends React.Component {
  render() {
    return (
      <div>
        <img width='150' src={this.props.item.followerImages}/>
        <p>{this.props.item.followerHandles}</p>
      </div>

    )
  }
}

export default Follower;
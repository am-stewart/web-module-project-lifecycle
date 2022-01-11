import React from 'react';

class Follower extends React.Component {
    render() {
      console.log('follower props', this.props)
        return (
            <div>
            <img src='https://avatars.githubusercontent.com/u/91036593?v=4'/>
            <p>Name: {this.props.state.userName}</p>
            <p>Bio: {this.props.state.userBio}</p>
            <p>Total Repos: {this.props.state.userRepos}</p>
            <p>Total Followers: {this.props.state.userFollowers}</p>
          </div>
        )
    }
}

export default Follower;
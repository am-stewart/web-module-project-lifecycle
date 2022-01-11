import React from 'react';

class Follower extends React.Component {
    render() {
        return (
            <div>
            <img src={this.props.userImage} alt='user image'/>
            <p>Name: {this.props.userName}</p>
            <p>Bio: {this.props.userBio}</p>
            <p>Total Repos: {this.props.userRepos}</p>
            <p>Total Followers: {this.props.userFollowers}</p>
          </div>
        )
    }
}

export default Follower;
import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
            <img src={this.props.userData.userImage} alt='user image'/>
            <p>Name: {this.props.userData.userName}</p>
            <p>Handle: {this.props.userData.userHandle}</p>
            <p>Total Repos: {this.props.userData.userRepos}</p>
            <p>Total Followers: {this.props.userData.userFollowers}</p>
          </div>
        )
    }
}

export default User;
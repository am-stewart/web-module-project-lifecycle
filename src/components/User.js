import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
            <img src={this.props.userData.avatar_url} alt='user image'/>
            <p>Name: {this.props.userData.name}</p>
            <p>Handle: {this.props.userData.login}</p>
            <p>Total Repos: {this.props.userData.public_repos}</p>
            <p>Total Followers: {this.props.userData.followers}</p>
          </div>
        )
    }
}

export default User;
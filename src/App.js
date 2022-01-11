import React from 'react';
import Follower from './components/Follower'
import FollowerList from './components/FollowerList'
import axios from 'axios';

class App extends React.Component {
  state = {
    userData:[{
      userImage:[],
      userName: '',
      userBio: '',
      userRepos: '',
      userFollowers: ''
    }],
    followerImages: [
      'https://avatars.githubusercontent.com/u/3699469?v=4',
      'https://avatars.githubusercontent.com/u/3699469?v=4',
      'https://avatars.githubusercontent.com/u/3699469?v=4',
      'https://avatars.githubusercontent.com/u/3699469?v=4',
    ],
    followerHandles: [
      'ChristOscar',
      'ChristOscar',
      'ChristOscar',
      'ChristOscar',
    ]
  }

  //THIS IS FOR USER INFORMATION 
  componentDidMount() {
    axios.get('https://api.github.com/users/am-stewart')
    .then(resp => {
      this.setState({
        ...this.state,
        userImage: resp.data.avatar_url,
        userName: resp.data.name,
        userBio: resp.data.bio,
        userRepos: resp.data.public_repos,
        userFollowers: resp.data.followers
      })
    }).catch(err => console.log('error'))
  }
  
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input placeholder={'enter github handle'}/>
        <button>Search</button>
      </form>
      <Follower userImage={this.state.userImage} userName={this.state.userName} userBio={this.state.userBio} userRepos={this.state.userRepos} userFollowers={this.state.userFollowers}/>
      <FollowerList followerImages={this.state.followerImages} followerHandles={this.state.followerHandles}/>

    </div>
    );
  }
}

export default App;

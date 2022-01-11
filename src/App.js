import React from 'react';
import Follower from './components/Follower'
import FollowerList from './components/FollowerList'

class App extends React.Component {
  state = {
    userImage: [
      'https://avatars.githubusercontent.com/u/91036593?v=4'
    ],
    userName: [
      'Allison Stewart'
    ],
    userBio: [
      'Full stack web dev student'
    ],
    userRepos: [
      34
    ],
    userFollowers: [
      2
    ],
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
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input placeholder={'enter github handle'}/>
        <button>Search</button>
      </form>
      <Follower state={this.state}/>
      <FollowerList state={this.state}/>

    </div>
    );
  }
}

export default App;

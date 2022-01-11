import React from 'react';

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
      <div>
        {/*this will be for the Follower.js FROM USER API*/}
        <img src='https://avatars.githubusercontent.com/u/91036593?v=4'/>
        <p>Name: {this.state.userName}</p>
        <p>Bio: {this.state.userBio}</p>
        <p>Total Repos: {this.state.userRepos}</p>
        <p>Total Followers: {this.state.userFollowers}</p>
      </div>
      
      <div>
      {/*this will be for the FollowerList.js FROM FOLLOWER API*/}
      <h3>Followers:</h3>
      {
        this.state.followerImages.map(image=> {
          return <img width='150' src={image}/> 
        })
      }
      </div>

    </div>
    );
  }
}

export default App;

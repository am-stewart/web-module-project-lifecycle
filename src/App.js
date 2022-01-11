import React from 'react';

class App extends React.Component {
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
        <p>Name: Allison Stewart</p>
        <p>Bio: Full stack web dev student</p>
        <p>Total Repos: 34</p>
        <p>Total Followers: 2</p>
      </div>
      
      <div>
      {/*this will be for the FollowerList.js FROM FOLLOWER API*/}
      <h3>Followers:</h3>
      <img width='150' src='https://avatars.githubusercontent.com/u/3699469?v=4'/>
      <p>Handle: ChristOscar</p>
      <img width='150' src='https://avatars.githubusercontent.com/u/3699469?v=4'/>
      <p>Handle: ChristOscar</p>
      <img width='150' src='https://avatars.githubusercontent.com/u/3699469?v=4'/>
      <p>Handle: ChristOscar</p>
      <img width='150' src='https://avatars.githubusercontent.com/u/3699469?v=4'/>
      <p>Handle: ChristOscar</p>
      </div>

    </div>
    );
  }
}

export default App;

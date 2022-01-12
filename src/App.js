import React from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList'
import axios from 'axios';

class App extends React.Component {
  state = {
    currentUser: 'am-stewart',
    userData:{},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp => {
      console.log(resp);
      this.setState({
        ...this.state,
        userData: {
          userImage: resp.data.avatar_url,
          userName: resp.data.name,
          userHandle: resp.data.login,
          userRepos: resp.data.public_repos,
          userFollowers: resp.data.followers,
        }
      })
      }).catch(err => console.log('error'))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers}`)
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data
      })
    })
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp => {
      console.log(resp);
      this.setState({
        ...this.state,
        userData: {
          userImage: resp.data.avatar_url,
          userName: resp.data.name,
          userHandle: resp.data.login,
          userRepos: resp.data.public_repos,
          userFollowers: resp.data.followers,
        }
      })
      }).catch(err => console.log('error'))
  }

  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input placeholder={'enter github handle'} onChange={this.handleChange}/>
        <button>Search</button>
      </form>
      <User userData={this.state.userData}/>
      <FollowerList followers={this.state.followers}/>

    </div>
    );
  }
}

export default App;

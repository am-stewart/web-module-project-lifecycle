import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
      console.log(this.props, 'followerlist props')
        return (
            <div>
            <h3>Followers:</h3>
            {
              this.props.followers.map(item => {
                return (<Follower item={item}/>)
              })
            }
            
            </div>
        )
    }
}

export default FollowerList;
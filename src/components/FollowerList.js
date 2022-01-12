import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return (
            <div>
            <h3>Followers:</h3>
            {
              this.props.followers.map(item => {
                return (<Follower key={item.id} item={item}/>)
              })
            }
            
            </div>
        )
    }
}

export default FollowerList;
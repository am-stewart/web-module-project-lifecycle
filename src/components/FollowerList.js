import React from 'react';

class FollowerList extends React.Component {
    render() {
        return (
            <div>
            <h3>Followers:</h3>
            {
              this.props.followerImages.map(image=> {
                return <img width='150' src={image}/> 
              })
            }
            </div>
        )
    }
}

export default FollowerList;
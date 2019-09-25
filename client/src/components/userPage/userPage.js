import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { userInfo } = this.props
    const { displayname } = userInfo
    return (
      <div>
        Welcome 
        {' '}
        {displayname}
      </div>
    )
  }
}
export default UserPage;
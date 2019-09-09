import React from 'react';
import { popup, popup_inner } from './SignUpCss.js'

class SignUp extends React.Component {
  render() {
    const { closePopup } = this.props
    return (
      <div css={popup}>
        <div css={popup_inner}>
          <h1>Sign up for Inspiration</h1>
        <button name='close' onClick={closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default SignUp
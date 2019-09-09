import React from 'react';
import { popup, popup_inner, header, closeButtonDiv, closeButton } from './SignUpCss.js'

class SignUp extends React.Component {
  render() {
    const { closePopup } = this.props
    return (
      <div css={popup}>
        <div css={popup_inner}>

          <div css={closeButtonDiv}>
            <button css={closeButton} name='close' onClick={closePopup}>X</button>
          </div>

          <h1 css={header}>Sign up for Inspiration</h1>
          <form>

            <label>
              Firstname:
              <input name='firstname' type='text' />
            </label>
            <br />
            <label>
              Lastname:
              <input name='lastname' type='text' />
            </label>
            <br />
            <label>
              Email:
              <input name='email' type='email' />
            </label>
            <br />
            <label>
              Password:
              <input name='password' type='password' />
            </label>
            <br />
            <label>
              Re-enter Password:
              <input name='password' type='password' />
            </label>
          </form>

        </div>

      </div>
    );
  }
}

export default SignUp
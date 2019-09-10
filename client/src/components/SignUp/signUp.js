import React from 'react';
import { popup, popup_inner, header, closeButtonDiv, closeButton, signUpForm, eachLabel, eachInput, theForm } from './SignUpCss.js'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      username: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  }
  render() {
    const { closePopup } = this.props
    return (
      <div css={popup}>
        <div css={popup_inner}>

          <div css={closeButtonDiv}>
            <button css={closeButton} name='close' onClick={closePopup}>X</button>
          </div>

          <h2 css={header}>"No one has become poor by giving."</h2>
          <h3 css={header}>~ Anne Frank ~</h3>
          <div css={signUpForm}>

            <form css={theForm}>

                <label css={eachLabel} >
                  <input css={eachInput} name='displayName' placeholder='Display Name' type='text'  />
                </label>

                <br/>

                <label css={eachLabel}>
                  <input css={eachInput} name='Username' placeholder='Username' type='text' />
                </label>

              <br />

                <label css={eachLabel}>
                  <input css={eachInput} name='email' placeholder='Email' type='email' />
                </label>

              <br />

              <label css={eachLabel}>
                <input css={eachInput} name='password' placeholder='Password' type='password' />
              </label>

              <br />

              <label css={eachLabel}>
                <input css={eachInput} name='passwordCheck' placeholder='Re-Enter Passward' type='password' />
              </label>

              <div>
                <input name='submit' type='submit'/>
              </div>

            </form>

          </div>

        </div>

      </div>
    );
  }
}

export default SignUp
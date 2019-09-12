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
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    if(e.target.name === 'displayName') {
      this.setState({
        displayName: e.target.value
      });
      console.log(this.state)
    }
    if(e.target.name === 'Username') {
      this.setState({
        username: e.target.value
      });
      console.log(this.state)
    }
    if(e.target.name === 'email') {
      this.setState({
        email: e.target.value
      });
      console.log(this.state)
    }
    if(e.target.name === 'password') {
      this.setState({
        password: e.target.value
      });
      console.log(this.state)
    }
    if(e.target.name === 'passwordCheck') {
      this.setState({
        passwordCheck: e.target.value
      });
      console.log(this.state)
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
                  <input onChange={this.onChangeHandler} css={eachInput} name='displayName' placeholder='Display Name' type='text'  />
                </label>

                <br/>

                <label css={eachLabel}>
                  <input onChange={this.onChangeHandler} css={eachInput} name='Username' placeholder='Username' type='text' />
                </label>

              <br />

                <label css={eachLabel}>
                  <input onChange={this.onChangeHandler} css={eachInput} name='email' placeholder='Email' type='email' />
                </label>

              <br />

              <label css={eachLabel}>
                <input onChange={this.onChangeHandler} css={eachInput} name='password' placeholder='Password' type='password' />
              </label>

              <br />

              <label css={eachLabel}>
                <input onChange={this.onChangeHandler} css={eachInput} name='passwordCheck' placeholder='Re-Enter Passward' type='password' />
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
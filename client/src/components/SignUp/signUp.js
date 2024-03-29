import React from 'react';
import { popup, popup_inner, header, closeButtonDiv, closeButton, signUpForm, eachLabel, eachInput, theForm, submitButton, submitButtonDiv } from './SignUpCss.js'

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
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { submit } = this.props
    const { displayName, username, email, password, passwordCheck } = this.state

    if( displayName.length > 0) {
      if(username.length > 0) {
        if(email.length > 0) {
          if(password.length >= 6) {
            if(password === passwordCheck) {
              submit(this.state)
            } else {
              alert('Password does not match.')
            }
          } else {
            alert('Your password must be 6 characters or longer.')
          }
        } else {
          alert('Enter an email.')
        }
      } else {
        alert('Enter a Username.')
      }
    } else {
      alert('Enter a Display Name.')
    }
  }

  onChangeHandler(e) {
    if(e.target.name === 'displayName') {
      this.setState({
        displayName: e.target.value
      });
    }
    if(e.target.name === 'Username') {
      this.setState({
        username: e.target.value
      });
    }
    if(e.target.name === 'email') {
      this.setState({
        email: e.target.value
      });
    }
    if(e.target.name === 'password') {
      this.setState({
        password: e.target.value
      });
    }
    if(e.target.name === 'passwordCheck') {
      this.setState({
        passwordCheck: e.target.value
      });
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

            <form css={theForm} onSubmit={this.onSubmitHandler}>

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

              <div css={submitButtonDiv}>
                <input css={submitButton} name='submit' type='submit'/>
              </div>

            </form>

          </div>

        </div>

      </div>
    );
  }
}

export default SignUp
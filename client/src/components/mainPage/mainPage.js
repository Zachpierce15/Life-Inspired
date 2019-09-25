import React from 'react';
import axios from 'axios';
import { quote, buttons, eachButton, homePage, author, middleQuote } from './mainPageCSS';

import SignUp from '../SignUp/signUp.js';
import SignIn from '../SignIn/SignIn';
import UserPage from '../userPage/userPage'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false,
      userData: undefined
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.newUserCreated = this.newUserCreated.bind(this);
    this.signInUser = this.signInUser.bind(this);
  }

  onClickHandler(e) {
    if(e.target.name === 'sign up') {
      this.setState({ signUp: true, signIn: false })
    }
    if(e.target.name === 'sign in') {
      console.log('THis is the best this ever')
      this.setState({ signUp: false, signIn: true })

    }
    if(e.target.name === 'close') {
      this.setState({ signUp: false, signIn: false })
    }
  }

  newUserCreated(data) {
    console.log('New User being created', data)
    axios.post('/newUser', data)
    .then((response) => {
      console.log('this is coming back', response)
      this.setState({signUp: false})
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
  }

  signInUser(e,email, password) {
    e.preventDefault()
    const data = {
    email,
    password
  }
    axios.get(`/loginUser`, {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log(response.data.rows[0])
      if(response.data.rows[0] !== undefined) {
        this.setState({userData: response.data.rows[0]})
      } else {
        alert('User not found')
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { signIn, signUp, userData } = this.state
      if(userData === undefined){
        return (
          <div css={homePage}>

            <div>

              <div css={quote}>
                "There's No Such Thing As A Bad Day.
              </div> 

              <div css={middleQuote}>
                Just Days You Haven't
              </div>

              <div css={quote}>
                Looked Hard Enough For The Good In It."
              </div>

              <div css={author}>
                ~ Zachary Michael Pierce ~
              </div>

              <div css={buttons}>
                <button css={eachButton} onClick={this.onClickHandler} name='sign in'>
                  Sign In
                </button>
                <button css={eachButton} onClick={this.onClickHandler} name='sign up'>
                  Sign Up
                </button>  
              </div>

            </div>

            {signUp ? 
              <SignUp
                closePopup={this.onClickHandler}
                submit={this.newUserCreated}
              />
              : null
            }
            {
              signIn ?
              <SignIn 
                closePopup={this.onClickHandler}
                signInUser={this.signInUser}
              />
              :null
            }
          </div>
          )
      } else {
        return (
          <div>
            <UserPage userInfo={userData}/>
          </div>
        )
      }
    }
  }

export default MainPage
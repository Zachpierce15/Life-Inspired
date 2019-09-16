import React from 'react';
import axios from 'axios'
import { quote, buttons, eachButton, homePage, author, middleQuote } from './mainPageCSS'

import SignUp from '../SignUp/signUp.js'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.newUserCreated = this.newUserCreated.bind(this);
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

  render() {
    const { signIn, signUp } = this.state

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

        </div>
        )
    }
  }

export default MainPage
import React from 'react';
import  { css } from '@emotion/core';

import SignUp from './signUp';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    if(e.target.name === 'sign up') {
      this.setState({ signUp: true })
    }
    if(e.target.name === 'sign in') {
      console.log('THis is the best this ever')
    }
  }
  render() {
    const { signIn, signUp } = this.state

    if(!signIn && !signUp){
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
              ~ Zachary Michael Pierce 
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

        </div>
        )
    }
    if(signUp) {
      return (
        <SignUp />
      )
    }
  }
}

// ========  CSS Emotions ========

const quote = css`
  font-size: 55px;
  color: grey;
  margin-top: 10px;
  text-align: left;
`
const middleQuote = css`
  font-size: 55px;
  color: grey;
  margin-top: 10px;
  text-align: center;
`
const author = css`
  font-size: 32px;
  text-align: right;
  margin-top: 10px;
`
const homePage = css`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const eachButton = css`
  background-color: blue;
  border: none;
  color: white;
  padding: 20px 37px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 12px;
`
const buttons = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
export default MainPage
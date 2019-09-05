import React from 'react';
import  { css } from '@emotion/core';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
    <div>
      <div css={quote}>
        There's No Such Thing As A Bad Day.
      </div> 
      <div>
        Just Days You Haven't Looked Hard Enough For The Good In It.
      </div>
      <button>
        Sign In
      </button>
      <button>
        Sign Up
      </button>
    </div>
    )
  }
}
// ========  CSS Emotions ========

const quote = css`
  color: red;
`
export default MainPage
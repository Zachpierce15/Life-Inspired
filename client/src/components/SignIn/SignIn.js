import React, { useState } from 'react';
import { popup, popup_inner, closeButton, closeButtonDiv, header, signUpForm, eachInput, eachLabel, theForm, submitButton, submitButtonDiv } from '../SignUp/SignUpCss';

const useSignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { closePopup } = props

  return (
    <div css={popup}>
      <div css={popup_inner}>
        <div css={closeButtonDiv}>
          <button css={closeButton} name='close' onClick={closePopup}>X</button>
        </div>
        <h2 css={header}> Aspire to inspire before we expire.</h2>
        <h3 css={header}>~ Unknown ~</h3>
        <div css={signUpForm}>

          <form css={theForm} >

            <label css={eachLabel}>
              <input css={eachInput} placeholder='Email' type='text' value={email}/>
            </label>

            <label css={eachLabel}>
              <input css={eachInput} placeholder='Password' type='password' value={password}/>
            </label>
          </form>

        </div>
      </div>
    </div>
  )
}
export default useSignIn
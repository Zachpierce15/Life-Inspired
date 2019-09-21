import  { css } from '@emotion/core';

const popup = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`

const popup_inner = css`
  position: absolute;
  left: 35%;
  right: 35%;
  top: 21%;
  bottom: 44%;
  margin: auto;
  background: rgb(210, 232, 233);
  border-radius: 6px;
`
const header = css`
  margin: 6px 0px;
  text-align: center;
`

const closeButtonDiv = css`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 5px;
`
const closeButton = css`
  border: none;
  font-size: larger;
  background: bottom;
`
const signUpForm = css`
  display: flex;
  justify-content: center;
`
const eachLabel = css`
  font-size: 27px;
`
const eachInput = css`
  margin: 7px 0px 15px 10px;
  padding: 5px;
  border-radius: 6px;
  font-size: 15px;
`
const theForm = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export{
  popup,
  popup_inner,
  header,
  closeButtonDiv,
  closeButton,
  signUpForm, 
  eachInput,
  eachLabel, 
  theForm
}
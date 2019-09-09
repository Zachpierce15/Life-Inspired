import  { css } from '@emotion/core';

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

export{
  quote,
  buttons,
  eachButton,
  homePage,
  author,
  middleQuote,
}
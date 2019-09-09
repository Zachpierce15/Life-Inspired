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
  left: 25%;
  right: 25%;
  top: 15%;
  bottom: 15%;
  margin: auto;
  background: white;
  border-radius: 6px;
`
const header = css`
  margin: 10px;
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
`
export{
  popup,
  popup_inner,
  header,
  closeButtonDiv,
  closeButton
}
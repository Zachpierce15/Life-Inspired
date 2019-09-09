import React from 'react';
import axios from 'axios';

import MainPage from './mainPage/mainPage.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //bind functions here
  }

  // componentDidMount() {
  //   axios.get('/')
  // }
  render() {
    return (
    <div>
      <MainPage/>
    </div>
    )
  }
}
export default App
import React, { Component } from 'react';
import Header from "./component/header"
import Headline from "./component/headLine";
import "./app.scss";

import {store} from "./store/index"

const tempArr = [{
  fName: 'Saleem',
  lName: 'Khan',
  email: 'skhan@gmail.com',
  age: 32,
  onlineStatus: true
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className='main'>
        <Headline 
        header="Post" 
        desc="click the button to render the post"
        tempArr={tempArr}
        />
        </section>
      </div>
    );
  }
}

export default App;

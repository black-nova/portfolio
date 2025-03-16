import React from 'react'
import {Component} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
render() {
  return (
    <div className="App">
      <Header />
      <br/>
      <Main />
      <br/>
      <Footer />
    </div>
  );
}
}
export default App;

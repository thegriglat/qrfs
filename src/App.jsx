
import './App.css';

import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import {toDataURL, toString} from 'qrcode';
import React, {Component} from 'react';

class QRC extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {qr: "", text: props.location.pathname.slice(1)};
  }

  componentDidMount(){
    toString(this.state.text, {type: "svg"}, (err, url) => {
      this.setState({qr: url});
      console.log(url);
    })
  }
 
  render(){
    // return  <img width="100%" src={this.state.qr} alt="qr"/>;
    return <span dangerouslySetInnerHTML={{__html: this.state.qr}} />;
  } 
}

function App() {
  return (
    <Router>
      <Switch>
       <Route path="/:text" component={QRC}/>
      </Switch>
    </Router>
  );
}

export default App;

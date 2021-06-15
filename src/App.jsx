
import './App.css';

import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import {toString} from 'qrcode';
import React from 'react';

class QRC extends React.Component {
  constructor(props){
    super(props);
    this.state = {qr: "", text: props.location.pathname.slice(1)};
  }

  componentDidMount(){
    toString(this.state.text, {type: "svg"}, (err, url) => {
      this.setState({qr: url});
    })
  }
 
  render(){
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

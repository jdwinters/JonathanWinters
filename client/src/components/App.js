import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import WebGlExample from "./WebglExample";
import AllShaders from "./AllShaders";

class App extends Component {
  // <Route path='/' component={ (props) => (
  //   <Home timestamp={new Date().toString()} {...props} />
  // )}/>

  //<Route path={YOURPATH} render={(props) => <YourComp {...props} keyProp={someValue} key={randomGen()}/>} />

  render() {
    return (
      <BrowserRouter>
        <body>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/webglexample" component={WebGlExample} />
            <Route exact path="/AllShaders" component={AllShaders} />
          </main>
        </body>
      </BrowserRouter>
    );
  }
}
export default App;

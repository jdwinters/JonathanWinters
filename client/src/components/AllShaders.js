import { Surface } from "gl-react-dom"; // for React DOM
import React, { Component } from "react";
import HelloBlue from "./pieces/ShaderExample";

class AllShaders extends Component {
    render() {
        return(
            <Surface width={300} height={300}>
                <HelloBlue blue={0.5} />
            </Surface>
        )
        
    }
  }
  
  export default AllShaders;
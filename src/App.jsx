import React from "react";
import Header from "./header"
import CoreConcepts from "./CoreConcepts";
import Examples from "./Examples";
import "./index.css";

function App(){
  return(
    <div>
        <Header />
        <main>
           <CoreConcepts />
           <Examples />
       </main>
    </div>    
  )
}

export default App;

import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./data";
import "./index.css";

export default function Examples(){

    const [selectedTopic,setSelectedTopic]=useState()

  function handlerSelect(SelectedButton){
    return(
      setSelectedTopic(SelectedButton)
    )
  }
    return(
        <section id= "examples">
            <h2>Examples</h2>
            <menu>
               <TabButton isSelected={selectedTopic === "components"} onSelect={()=> handlerSelect('components')}>components</TabButton>
               <TabButton isSelected={selectedTopic === "jsx"} onSelect={()=> handlerSelect('jsx')}>Jsx</TabButton>
               <TabButton isSelected={selectedTopic === "props"} onSelect={()=> handlerSelect('props')}>props</TabButton>
               <TabButton isSelected={selectedTopic === "state"} onSelect={()=> handlerSelect('state')}>state</TabButton>
            </menu>
            {!selectedTopic? "Please select a topic" :
             <div id ="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
               </pre> 
            </div>}
            
          </section>
    );


}
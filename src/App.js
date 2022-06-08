import React from "react";
import explorers from "./data/folderData";
import Folder from "./components/Folder";

function App() {
  return (
    <div className="container h-100">
      {
        explorers.map((explorer,index) => (
          <Folder explorer={explorer} key={index} />
        ))
      }
    </div>
  );
}

export default App;

import React from "react";
import MyEditor from "./container/MyEditor";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quill Editor with Video Resize!</h1>
      </header>
      <main>
        <MyEditor />
      </main>
    </div>
  );
};

export default App;

import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    <Header name={"I am Blog data"}/>
    <About about="I am a frontend developer expriance in reactjs"/>
    </div>
  );
}

export default App;

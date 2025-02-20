import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/posts"; // Ensure this exists

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About image="https://via.placeholder.com/215" about="A blog about React" />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

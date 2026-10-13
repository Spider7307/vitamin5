import React,{useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";

// TODO: Add content for Home page (welcome message or description)
// TODO: Use useContext to access theme and style accordingly
function Home() {
  const theme = useContext(ThemeContext);

  return (
  <div className={`Home ${theme}`}>
    <h1>Welcome to the Home Page!</h1>
    <p>Other important information is also right here!</p>

  </div>);
}

export default Home;
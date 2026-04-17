import Navbar from "./components/navbar";
import Home from "./page/landpage";
import Blog from "./page/blogpage";
import About from "./page/about";
import Contact from "./page/contact";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <Blog />
      <About />
      <Contact />
    </>
  );
}

export default App;
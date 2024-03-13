import "./index.css";
import Navbar from "./components/Navbar/Navbar.component";
import Banner from "./components/Banner/Banner.component";
import Introduction from "./components/Introduction/Introduction.component";
import Projects from "./components/Projects/Projects.component";
import Works from "./components/Works/Works.component";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Introduction />
      <Projects />
      <Works />
    </>
  );
}

export default App;

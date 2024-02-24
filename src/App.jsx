import "./index.css";
import Navbar from "./components/Navbar/Navbar.component";
import Banner from "./components/Banner/Banner.component";
import Introduction from "./components/Introduction/Introduction.component";
import Projects from "./components/Projects/Projects.component";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Introduction />
      <Projects />
    </>
  );
}

export default App;

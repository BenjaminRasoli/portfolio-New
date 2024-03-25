import "./index.css";
import Navbar from "./components/Navbar/Navbar.component";
import Banner from "./components/Banner/Banner.component";
import Introduction from "./components/Introduction/Introduction.component";
import Projects from "./components/Projects/Projects.component";
import Works from "./components/Works/Works.component";
import Contact from "./components/Contact/Contact.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Banner />
      <Introduction />
      <Projects />
      <Works />
      <Contact />
    </>
  );
}

export default App;

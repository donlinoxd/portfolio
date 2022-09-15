import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

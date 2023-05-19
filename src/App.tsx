import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;

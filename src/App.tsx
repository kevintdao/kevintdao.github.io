import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const items = [
  {
    id: "about",
    component: <About />,
  },
  {
    id: "skills",
    component: <Skills />,
  },
  {
    id: "projects",
    component: <Projects />,
  },
  {
    id: "contact",
    component: <Contact />,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Main />
        {items.map((item) => (
          <section
            id={item.id}
            className="w-full md:min-h-screen p-4 flex items-center py-16"
          >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
              {item.component}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;

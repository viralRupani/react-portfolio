// components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/*  Loader 
       <div id="loading">
        <img
          id="loading-img"
          src="static/gif/Gear-0.7s-100px.gif"
          alt="page is loading"
        />
      </div> */}
      
      {/* <div id="trailer"></div> */}

      <section id="title">
        <Navbar />
        <Header />
      </section>
      <Expertise />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

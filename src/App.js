import './App.scss';
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Format from "./components/format";
import Travel from "./components/travel";
import Geogfafik from "./components/geogfafik";
import Forma from "./components/forma";
import Question from "./components/question";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Format/>
        <Travel/>
        <Geogfafik/>
        <Forma/>
        <Question/>
        <Footer/>

    </div>

  );
}

export default App;

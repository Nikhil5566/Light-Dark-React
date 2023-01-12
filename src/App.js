import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Nikhil Verma";

function App() {
  return (
    <>
      <Navbar title="Nikhil Verma 2" home="Nikhil-Home" />

      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;

//Always add <></>.------- In the beginning of the react code.
//JSX Explained is that it is just a HTML but with small difference in the code like :
//Class "repalced" with className
//for "repalced" HTMLfor
//Tabindex "repalced" tabIndex
//Href "#" to href "/"
//ShortCut for Replacing stuff is ctrl+f.

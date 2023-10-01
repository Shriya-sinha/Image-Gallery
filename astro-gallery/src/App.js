import "./App.css";
import Navbar from "./components/Navbar";
import Uploadform from "./components/uploadform";

function App() {
  return (
    <div className="App">
      <Navbar title="Image-Gallery" />
      <Uploadform />
    </div>
  );
}

export default App;

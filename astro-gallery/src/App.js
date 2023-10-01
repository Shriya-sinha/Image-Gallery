import "./App.css";
import Navbar from "./components/Navbar";
import uploadform from "./components/uploadform";

function App() {
  return (
    <div className="App">
      <Navbar title="Image-Gallery" />
      <uploadform />
    </div>
  );
}

export default App;

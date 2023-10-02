import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase/config";
import "./App.css";
import Navbar from "./components/Navbar";
import Uploadform from "./components/uploadform";
import setStorage from "";

const db = getDatabase(app);

function App() {
  const outdata = () => {
    set(ref(db, "users/shrey"), {
      id: 1,
      name: "Shreya",
      age: 20,
    });
  };
  return (
    <div className="App">
      <Navbar title="Image-Gallery" />
      <Uploadform />
    </div>
  );
}

export default App;

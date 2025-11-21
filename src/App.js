import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center w-full h-full ">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

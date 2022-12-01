import Home from "./components/Home";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <div className="bg-[#106f9b] flex ">
      <LeftSide />
      <Home />
      <div className="h-screen"></div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar, { StickyNavbar } from "./components/navbar/Navbar";
import RouterIndex from "./router/RouterIndex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <RouterIndex />
      </header>
    </div>
  );
}

export default App;

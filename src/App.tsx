import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dune</h1>
        <Content />
      </header>
    </div>
  );
};

export default App;

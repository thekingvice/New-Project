import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import LandingPage from "./Components/LandingPage/LandingPage";
import ComponentDemos from "./Components/ComponentDemos/ComponentDemos";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <ComponentDemos />
    </div>
  );
}

export default App;

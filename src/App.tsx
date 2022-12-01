import "./App.css";
import Provider from "./auth/Provider";
import RouteMap from "./routes";

function App() {
  return (
    <Provider>
      <RouteMap />
    </Provider>
  );
}

export default App;

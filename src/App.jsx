import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

const App = () => {
  return (
    <BrowserRouter basename="/unfinity-extras-helper">
      <Router />
    </BrowserRouter>
  );
};

export default App

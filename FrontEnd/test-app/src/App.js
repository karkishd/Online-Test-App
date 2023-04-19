import "./App.css";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import LogIn from "./LogIn/LogIn";
import Registration from "./Registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LogIn />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="new" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

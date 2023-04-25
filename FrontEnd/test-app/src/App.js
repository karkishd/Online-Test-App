import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/login/Login";
import Registration from "./component/pages/registration/Registration";
import ForgotPassword from "./component/pages/forgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="new" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

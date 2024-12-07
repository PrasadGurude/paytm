import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup.jsx";
import { Signin } from "./pages/Signin.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { SendMoney } from "./pages/SendMoney.jsx";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
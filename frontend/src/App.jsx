import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Results from "./pages/results";
import Reserve from "./pages/reserve";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="results/:city/:modality" element={<Results />} />
          <Route path="reserve/:id" element={<Reserve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

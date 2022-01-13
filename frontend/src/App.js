import Register from "./component/Register";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

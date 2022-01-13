import Register from "./component/Register";
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    
    <div className="App">
      <h1>Welcome To App</h1>
      <Routes>
      
     <Route path="/register" element={<Register />}/> 
      </Routes>
    </div>
  );
}

export default App;

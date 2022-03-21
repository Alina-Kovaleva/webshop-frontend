import "./App.css";
import { NavBar } from "./components";
import { Homepage, DetailsPage, ShopPage } from './pages'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <h1>HEllo doing some setup</h1>
    </div>
  );
}

export default App;

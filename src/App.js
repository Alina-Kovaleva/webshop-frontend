// import "./App.css";
import { NavBar } from "./components";
import {
  Homepage,
  DetailsPage,
  ShopPage,
  SignupPage,
  ProductsPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

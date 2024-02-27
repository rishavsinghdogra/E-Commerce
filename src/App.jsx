import "./App.css";
import AllDataContext from "./contexts/Alldata";
import Mainsite from "./components/MainSite";
import Login from "./components/Login";
// import Signup from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";
import Protectedroute from "./routes/ProtectedRoutes";
// import ProductDetail from "./components/ProductDetail";
// import DisplayProduct from "./components/DisplayProduct";
import LoginState from "./contexts/LoginState";


function App() {
  //   const rishav = async () => {

  //     const response = await axios.post("https://fakestoreapi.com/auth/login", {
  //       username: "mor_2314",
  //       password: "83r5^_"
  //   })
  //     console.log(response);
  // }

  // const rishav = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/users");
  //   console.log(response.data);
  // }

  // useEffect(
  //   () => { rishav() }
  // )

  return (
    <>
      <LoginState>
      <AllDataContext>
        <Routes>
          <Route element={<Protectedroute />}>
            <Route path="/" element={<Mainsite />} />
          </Route>

          <Route path="/login" element={<Login />} />
          
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
        </Routes>
      </AllDataContext>
      </LoginState>
    </>
  );
}

export default App;
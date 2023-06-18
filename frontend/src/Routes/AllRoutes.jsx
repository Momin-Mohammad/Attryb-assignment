import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/addCar" element={<HomePage/>} />
            <Route path="/edit/:id" element={<HomePage/>} />
        </Routes>
    )
}
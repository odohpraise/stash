import { Route, BrowserRouter, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import ProtectedRoute from "./ProtectedRoute"
import Dashboard from "../pages/Dashboard/Dashboard"
import AddResource from "../pages/AddResource/AddResource"
import EditResource from "../pages/EditResource/EditResource"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={
                    <ProtectedRoute><Dashboard /></ProtectedRoute>
                } />

                <Route path="/add-resources" element={
                    <ProtectedRoute><AddResource /></ProtectedRoute>
                } />

                <Route path="/edit-resource/:id" element={
                    <ProtectedRoute><EditResource /></ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
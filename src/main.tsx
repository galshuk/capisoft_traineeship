import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from "@/components/ui/provider"
import './index.css'
// import App from './App.tsx'
import Dashboard from "./Components/Pages/Dashboard.tsx"
import Login from './Components/Pages/login.tsx';
import UserPage from './Components/Pages/UserPage.tsx';
import Register from "./Components/Pages/register.tsx";
import { AuthProvider } from './Components/Utility/AuthContext.tsx';
import { PrivateRoute } from './Components/Utility/PrivateRoute.tsx';
import { PublicRoute } from './Components/Utility/PublicRoute.tsx';

const root = document.getElementById("root");

createRoot(root!).render (
  <StrictMode>
    <Provider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

            <Route path="/userPage" element={<PrivateRoute><UserPage /></PrivateRoute>} />

            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>
);

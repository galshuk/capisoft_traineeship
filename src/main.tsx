import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css'
import App from './App.tsx'
import Dashboard from "./Components/Pages/Dashboard.tsx"
import Login from './Components/Pages/login.tsx';
import UserPage from './Components/Pages/UserPage.tsx';
import { AuthProvider } from './Components/Utility/AuthContext.tsx';
import { PrivateRoute } from './Components/Utility/PrivateRoute.tsx';
import { PublicRoute } from './Components/Utility/PublicRoute.tsx';

const root = document.getElementById("root");

createRoot(root!).render (
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

          <Route path="/userPage" element={<PrivateRoute><UserPage /></PrivateRoute>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

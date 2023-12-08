// src/routes/authRoutes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../auth/Login/Login';
import Register from '../../auth/Register/Register';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AuthRoutes;

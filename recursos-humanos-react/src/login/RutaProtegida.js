import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children }) {  
    const logueado = localStorage.getItem("autenticado") === "true";
  return logueado ? children : <Navigate to="/" replace />;
  
}

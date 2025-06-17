import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navegacion({ logueado, setLogueado}) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    setLogueado(false);
    navigate('/');
  };
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="/inicio">Sistema de Recursos Humanos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              {/* Mostrar solo si está logueado */}
              {logueado && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/inicio">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/agregar">Agregar empleado</Link>
                  </li>
                    <li className="nav-item">
                    <button className="nav-link" onClick={cerrarSesion}>Cerrar sesión</button>
                  </li>
                </>
              )}


            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLogueado }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuario hardcodeado de prueba
    const usuarioValido = 'admin';
    const contrasenaValida = '1234';

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      localStorage.setItem('autenticado', 'true');
      setLogueado(true); // <-- actualiza la vista del menú
      navigate('/inicio');
      navigate('/inicio');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className='col-md-6 mx-auto mt-5'>
      <h1 className='text-center text-light'>Inicio de sesión</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label text-light fs-5">Usuario</label>
          <input
            type="text"
            className="form-control border-dark"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label text-light fs-5">Contraseña</label>
          <input
            type="password"
            className="form-control border-dark"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className='btn btn-primary fs-4 w-100'>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
  let navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const {nombre, departamento, sueldo} = empleado

  const onInputChange = (e) => {
    //spread operator ... (expandir los atributos)
    setEmpleado({ ...empleado, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rh-app/empleados";
    await axios.post(urlBase, empleado);
    //Redirigimos a la pagina de inicio
    navegacion("/inicio")
  }

  return (
    <div className='container'>
      <div className='containeer text-center' style={{ margin: "30px" }}>
        <h3 className='text-light'>Agregar Empleado</h3>
      </div>
      <div className="row justify-content-center">
        <form className='col-md-6' onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label text-light fs-5">Nombre</label>
            <input type="text" className="form-control border-dark " id="nombre" name="nombre"
              required={true} value={nombre} onChange={(e) => onInputChange(e)} />
          </div>

          <div className="mb-3">
            <label htmlFor="departamento" className="form-label text-light fs-5">Departamento</label>
            <input type="text" className="form-control border-dark" id="departamento" name="departamento"
              required={true} value={departamento} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label text-light fs-5">Sueldo</label>
            <input type="number" step="any" className="form-control border-dark" id="sueldo" name="sueldo"
              required={true} value={sueldo} onChange={(e) => onInputChange(e)} />
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-primary me-3 fs-4">Agregar</button>
            <a href='/inicio' className='btn btn-dark fs-4'>Regresar</a>
          </div>
        </form>
      </div>
    </div>
  )
}

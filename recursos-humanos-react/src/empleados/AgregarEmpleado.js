import React from 'react'

export default function AgregarEmpleado() {
  return (
    <div className='container'>
      <div className='containeer text-center' style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>
      <div className="row justify-content-center">
        <form className='col-md-6'>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control border-dark" id="nombre" name="nombre" required={true} />
          </div>
          <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control border-dark" id="departamento" name="departamento" required={true} />
          </div>
          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label">Sueldo</label>
            <input type="number" step="any" className="form-control border-dark" id="sueldo" name="sueldo" required={true} />
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-primary me-3">Agregar</button>
            <a href='/' className='btn btn-dark'>Regresar</a>
          </div>
        </form>
      </div>
    </div>
  )
}

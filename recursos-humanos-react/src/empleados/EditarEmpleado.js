import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditarEmpleado() {

  const urlBase = "http://localhost:8080/rh-app/empleados";

  let navegacion = useNavigate();

  const { id } = useParams();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const { nombre, departamento, sueldo } = empleado

  const cargarEmpleado = useCallback(async () => {
    const resultado = await axios.get(`${urlBase}/${id}`)
    setEmpleado(resultado.data)
  }, [id, urlBase]);

  useEffect(() => {
    cargarEmpleado();
  }, [cargarEmpleado]);



  const onInputChange = (e) => {
    //spread operator ... (expandir los atributos)
    setEmpleado({ ...empleado, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, empleado);
    //Redirigimos a la pagina de inicio
    navegacion("/inicio");
  }

  return (
    <div className='container'>
      <div className='containeer text-center' style={{ margin: "30px" }}>
        <h3>Editar Empleado</h3>
      </div>
      <div className="row justify-content-center">
        <form className='col-md-6' onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control border-dark" id="nombre" name="nombre"
              required={true} value={nombre} onChange={(e) => onInputChange(e)} />
          </div>

          <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control border-dark" id="departamento" name="departamento"
              required={true} value={departamento} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label">Sueldo</label>
            <input type="number" step="any" className="form-control border-dark" id="sueldo" name="sueldo"
              required={true} value={sueldo} onChange={(e) => onInputChange(e)} />
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-primary me-3">Guardar</button>
            <a href='/inicio' className='btn btn-dark'>Regresar</a>
          </div>
        </form>
      </div>
    </div>
  )
}

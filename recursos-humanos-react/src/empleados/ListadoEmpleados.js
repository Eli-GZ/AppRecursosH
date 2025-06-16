import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {
  //URL del back-end
  const urlBase = "http://localhost:8080/rh-app/empleados";

  //hook de estado, crea una variable empleados y una funcion para modificarla setEmpleados
  const [empleados, setEmpleados] = useState([]);

  //Se llama a la funcion cargarEmpleados, obtiene los datos del back-end(array al final, provoca que se ejecute solo una vez)
  useEffect(() => {
    cargarEmpleados();
  }, []);

  //get con axios. carga los datos del back-end(resultado.data) y lo guarda en empleados
  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  }
const eliminarEmpleado = async(id) =>{
  await axios.delete(`${urlBase}/${id}`);
  cargarEmpleados();
}
  return (
    <div className="container">
      <div className="container text-center">
        <h4 className="text-light">Listado de Empleados activos</h4>
      </div>

      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark fs-5">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className='fs-5 fw-bolder'>
          {
            //Iteramos el arreglo de empleados
            empleados.map((empleado, indice) => (
              <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td><NumericFormat value={empleado.sueldo}
                  displayType='text'
                  thousandSeparator="," prefix='$'
                  decimalScale={2} fixedDecimalScale />
                </td>
                <td className='text-center'>
                  <div>
                    <Link to={`/editar/${empleado.idEmpleado}`}
                    className='btn btn-primary btn-sm me-3 fs-5'>Editar</Link>
                    <button onClick={()=> eliminarEmpleado(empleado.idEmpleado)}  className='btn btn-dark btn-sm fs-5'>
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>

  )
}

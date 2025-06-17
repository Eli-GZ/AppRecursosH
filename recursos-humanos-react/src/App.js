import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";
import Login from "./login/Login";
import RutaProtegida from "./login/RutaProtegida";
import { useState } from "react";

function App() {
   const [logueado, setLogueado] = useState(localStorage.getItem("autenticado") === "true");
  return (    
    <div className="container">
 <BrowserRouter>
        <Navegacion logueado={logueado} setLogueado={setLogueado} />
        <Routes>
          <Route path="/" element={<Login setLogueado={setLogueado} />} />
          <Route
            path="/inicio"
            element={
              <RutaProtegida>
                <ListadoEmpleados />
              </RutaProtegida>
            }
          />
          <Route
            path="/agregar"
            element={
              <RutaProtegida>
                <AgregarEmpleado />
              </RutaProtegida>
            }
          />
          <Route
            path="/editar/:id"
            element={
              <RutaProtegida>
                <EditarEmpleado />
              </RutaProtegida>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

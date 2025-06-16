package egz.rh.controlador;

import egz.rh.excepcion.RecursoNoEncontradoExcepcion;
import egz.rh.modelo.Empleado;
import egz.rh.servicio.IEmpleadoServicio;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:3000")
public class EmpleadoControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(EmpleadoControlador.class);
    
    @Autowired
    private IEmpleadoServicio empleadoServ;
    
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados() {
        List<Empleado> listaEmple = empleadoServ.listarEmpleados();
        listaEmple.forEach(empleado -> logger.info(empleado.toString()));
        return listaEmple;
    }
    
    @PostMapping("/empleados")
    public Empleado agegarEmpleado(@RequestBody Empleado empleado) {
        logger.info("Empleado a agregar: " + empleado);
        return empleadoServ.guardarEmpleado(empleado);
    }
    
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoId(@PathVariable Integer id) {
        Empleado emple = empleadoServ.buscarEmpleadoId(id);
        if (emple == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontro el empleado id: " + id);
        } else {
            return ResponseEntity.ok(emple);
        }
    }
    
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoRecibido) {
        Empleado empleado = empleadoServ.buscarEmpleadoId(id);
        if (empleado == null) {
            throw new RecursoNoEncontradoExcepcion("ElidRecibido no existe: " + id);
        }
        empleado.setNombre(empleadoRecibido.getNombre());
        empleado.setDepartamento(empleadoRecibido.getDepartamento());
        empleado.setSueldo(empleadoRecibido.getSueldo());
        empleadoServ.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleado);
    }
    
}

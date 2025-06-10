package egz.rh.controlador;

import egz.rh.modelo.Empleado;
import egz.rh.servicio.IEmpleadoServicio;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

}

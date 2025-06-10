package egz.rh.servicio;

import egz.rh.modelo.Empleado;
import egz.rh.repositorio.IEmpleadoRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoServicio implements IEmpleadoServicio {

    @Autowired
    private IEmpleadoRepositorio empleRepo;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleRepo.findAll();
    }

    @Override
    public Empleado buscarEmpleadoId(Integer idEmpleado) {
        Empleado emple = empleRepo.findById(idEmpleado).orElse(null);
        return emple;
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleRepo.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Empleado empleado) {
        empleRepo.delete(empleado);
    }
    

}

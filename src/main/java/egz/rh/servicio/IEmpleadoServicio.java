package egz.rh.servicio;

import egz.rh.modelo.Empleado;
import java.util.List;

public interface IEmpleadoServicio {

    public List<Empleado> listarEmpleados();

    public Empleado buscarEmpleadoId(Integer idEmpleado);

    public Empleado guardarEmpleado(Empleado empleado);
    
    public void eliminarEmpleado(Empleado empleado);

}

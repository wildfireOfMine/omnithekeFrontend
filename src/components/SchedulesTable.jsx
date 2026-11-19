
import { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, TextField, IconButton, Stack } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import CustomButton from "./CustomButton";
import { crearHorarios, misHorarios } from "../store/AppointmentSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ScheduleTables = () => {
  const crearNuevoHorario = {
    diaSemana: 0,
    horaInicio: "09:00",
    horaFin: "14:00",
  };

  const [horarios, setHorarios] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(misHorarios()).unwrap().then((datos => setHorarios(datos)));
  }, [dispatch])

  const anadirHorario = () => {
    setHorarios((horariosAnterior) => [...horariosAnterior, crearNuevoHorario]);
  };

  const eliminarHorario = (index) => {
    setHorarios((horariosAnteriores) => horariosAnteriores.filter((horarioActual, posicionActual) => posicionActual !== index));
  };

  const modificarHorario = (index, campo, valor) => {
    setHorarios((horariosAnteriores) => horariosAnteriores.map((horarioActual, i) => i === index ? { ...horarioActual, [campo]: valor } : horarioActual));
  };

  const guardarHorarios = async () => {
    console.log("Horarios para enviar:", horarios);

    try {
      await dispatch(crearHorarios(horarios)).unwrap();
      toast.success("Horarios actualizados con éxito")
    } catch (err) {
      console.log(err);
      toast.error("Algo anda mal...");
    }

  };

  const diasSemana = [
    { id: 0, nombre: "Lunes" },
    { id: 1, nombre: "Martes" },
    { id: 2, nombre: "Miércoles" },
    { id: 3, nombre: "Jueves" },
    { id: 4, nombre: "Viernes" },
    { id: 5, nombre: "Sábado" },
    { id: 6, nombre: "Domingo" },
  ]

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 3,
        p: { xs: 2, sm: 3 },
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }} 
      sx={{ 
        justifyContent:"space-between", 
        alignItems: { 
          xs:"flex-start", 
          sm:"center"
        }
      }} 
      spacing={2} mb={3}
      >
        <Box>
          <Typography variant="h5" fontWeight={800}>Horarios de disponibilidad</Typography>
          <Typography color="text.secondary">Configura los días y horas de atención</Typography>
        </Box>

        <CustomButton backgroundColor="#16a34a" text="Añadir horario" color="white" onClick={anadirHorario}/>
      </Stack>

      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ borderRadius: 2, overflowX: "auto", mb: 2 }}
      >
        <Table sx={{ minWidth: 550 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f8fafc" }}>
              <TableCell><strong>Día de la semana</strong></TableCell>
              <TableCell><strong>Hora de inicio</strong></TableCell>
              <TableCell><strong>Hora de fin</strong></TableCell>
              <TableCell align="center"><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {horarios.map((horario, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Select fullWidth size="small" value={horario.diaSemana}
                    onChange={(e) =>
                      modificarHorario(index, "diaSemana", e.target.value)
                    }
                  >
                    {diasSemana.map((dia) => (
                      <MenuItem key={dia.id} value={dia.id}>
                        {dia.nombre}
                      </MenuItem>
                    ))}

                  </Select>
                </TableCell>

                <TableCell>

                  <TextField
                    fullWidth size="small" type="time" value={horario.horaInicio}
                    onChange={(e) =>
                      modificarHorario(index, "horaInicio", e.target.value)
                    }
                  />

                </TableCell>

                <TableCell>

                  <TextField
                    fullWidth size="small" type="time" value={horario.horaFin}
                    onChange={(e) =>
                      modificarHorario(index, "horaFin", e.target.value)
                    }
                  />
                </TableCell>

                <TableCell align="center">
                    
                  <IconButton color="error" onClick={() => eliminarHorario(index)} disabled={horarios.length === 1}>
                    <DeleteOutlineOutlined />
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction={{ xs: "column", sm: "row" }} 
        sx={{ 
          justifyContent:"space-between", 
          alignItems: { 
            xs:"flex-start", 
            sm:"center"
          }
        }}  
        mt={3} spacing={2}
      >
        <Typography color="text.secondary" variant="body2">{horarios.length} horarios configurados</Typography>
        <CustomButton backgroundColor="#16a34a" text="Guardar horarios" color="white" onClick={guardarHorarios}/>
      </Stack>

    </Box>
  );
}

export default ScheduleTables
import { Box, Card, CardContent, Typography } from "@mui/material";
import { PeopleAlt, MedicalServices, EventAvailable, PendingActions, AssignmentTurnedIn, EventBusy} from "@mui/icons-material";
import CustomBox from '../../components/CustomBox';
import { useEffect, useState } from "react";
import { estadisticas } from '../../store/UserSlice'
import { useDispatch } from 'react-redux'

const Stats = () => {
  const estadisticasCards = [
    {
      titulo: "Usuarios registrados",
      clave: "usuariosRegistrados",
      icono: <PeopleAlt />,
      color: "#2563eb"
    },
    {
      titulo: "Doctores registrados",
      clave: "doctoresRegistrados",
      icono: <MedicalServices />,
      color: "#16a085"
    },
    {
      titulo: "Citas este mes",
      clave: "citasMensuales",
      icono: <EventAvailable />,
      color: "#7c3aed"
    },
    {
      titulo: "Citas pendientes",
      clave: "citasPendientes",
      icono: <PendingActions />,
      color: "#d97706"
    },
    {
      titulo: "Consultas realizadas",
      clave: "consultasRealizadas",
      icono: <AssignmentTurnedIn />,
      color: "#0891b2"
    },
    {
      titulo: "Citas canceladas",
      clave: "citasCanceladas",
      icono: <EventBusy />,
      color: "#dc2626"
    }
  ];

  const [datos, setDatos] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(estadisticas()).unwrap().then((datos)=> setDatos(datos));
    
  }, [dispatch])
  console.log(datos);

  return (
    <CustomBox>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#1f2933",
          margin: "12px",
        }}
        >
          Estadísticas Mensuales
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
          },
          gap: 2,
          p: 3
        }}
      >
        {estadisticasCards.map((estadistica) => (
          <Card
            key={estadistica.titulo}
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Box>
                  <Typography color="text.secondary" variant="body2">{estadistica.titulo}</Typography>
                  <Typography variant="h4" fontWeight={800} sx={{ mt: 1 }}>{datos?.[estadistica.clave] ?? 0}</Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: `${estadistica.color}18`,
                    color: estadistica.color, borderRadius: 3,
                    p: 1.5, display: "flex",
                    alignItems: "center", fontSize: 32
                  }}
                >
                  {estadistica.icono}
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </CustomBox>
  );
};

export default Stats;

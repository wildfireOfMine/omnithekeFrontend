import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { miConsulta } from '../../store/HistorySlice';
import { useNavigate, useParams } from 'react-router-dom';
import CustomBox from '../../components/CustomBox';
import { Typography, Box, Divider, Chip, Paper } from '@mui/material';
import { justifyContent, Stack } from '@mui/system';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CustomButton from '../../components/CustomButton';
import CustomData from '../../components/CustomData';
import { AssignmentOutlined, DescriptionOutlined, MedicalServicesOutlined, MedicationOutlined, Person2Outlined, PersonOutlineOutlined } from '@mui/icons-material';
import CustomSection from '../../components/CustomSection';
import "./DetailQueryView.css";

const DetailQueryView = () => {
  const [datos, setDatos] = useState();
  const dispatch = useDispatch();
  const { consultaId } = useParams(); 
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(miConsulta(consultaId)).unwrap().then(datos => setDatos(datos));
  }, [dispatch]);

  const fecha = datos?.fechaRegistro
    ? new Date(datos.fechaRegistro).toLocaleString("es-ES", {
        dateStyle: "long",
        timeStyle: "short",
      })
    : "No disponible";

  const handleImprimir = () => {
    window.print();
  };

  const handleCustomButton = () => {
    navigate(-1);
  }

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
          Consulta 
      </Typography>

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#edf0f4",
          py: { xs: 3, md: 6 },
          px: 2,
        }}
      >
      {datos && (
        <Paper
          className="documentoMedico"
          elevation={0}
          sx={{
            maxWidth: 900,
            mx: "auto",
            p: { xs: 3, sm: 5, md: 7 },
            bgcolor: "#fffefa",
            color: "#263747",
            border: "1px solid #e1e5e9",
            borderRadius: "3px",
            boxShadow: "0 8px 30px rgba(30, 50, 70, 0.12)",
          }}
        >

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <MedicalServicesOutlined
                  sx={{ fontSize: 38, color: "#3979a8" }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, letterSpacing: "-1px" }}
                >
                  Omnitheke
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ color: "#718096", mt: 0.5 }}
              >
                Sistema de gestión de historia clínica
              </Typography>
            </Box>

            <Chip
              icon={<DescriptionOutlined />}
              label="Informe médico"
              sx={{
                bgcolor: "#e8f1f8",
                color: "#285d83",
                fontWeight: 600,
              }}
            />
          </Stack>

          <Divider sx={{ my: 3, borderColor: "#b9ccd9" }} />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", sm: "2.3rem" },
              mb: 1,
            }}
          >
            Consulta médica
          </Typography>

          <Typography variant="body1" sx={{ color: "#718096", mb: 4 }}>
            Registro clínico de la atención sanitaria
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
              p: { xs: 2, sm: 3 },
              bgcolor: "#f3f6f9",
              borderRadius: 2,
              mb: 4,
            }}
          >
            <CustomData icono={<DescriptionOutlined />} titulo="N.º de consulta" valor={datos.id}/>
            <CustomData icono={<CalendarMonthOutlinedIcon />} titulo="Fecha de registro" valor={fecha}/>
            <CustomData icono={<Person2Outlined />} titulo="N.º de cita" valor={datos.cita}/>
            <CustomData icono={<PersonOutlineOutlined />} titulo="Paciente" valor={datos.paciente}/>
            <CustomData icono={<MedicalServicesOutlined />} titulo="Médico responsable" valor={datos.doctor}/>
          </Box>

          <CustomSection icono={<AssignmentOutlined />} titulo="Diagnóstico" contenido={datos.diagnostico}/>
          <CustomSection icono={<MedicationOutlined />} titulo="Tratamiento prescrito" contenido={datos.tratamiento}/>
          <CustomSection icono={<DescriptionOutlined />} titulo="Observaciones" contenido={datos.observaciones}/>


          <Divider sx={{ my: 4, borderColor: "#b9ccd9" }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: "#3979a8" }}
              >
                OMNITHEKE
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Documento de historia clínica
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center", minWidth: 180 }}>
              <Typography
                sx={{
                  borderBottom: "1px solid #9aa9b5",
                  pb: 1,
                  fontStyle: "italic",
                  color: "#526b80",
                }}
              >
                {datos.doctor}
              </Typography>
              <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
                Médico responsable
              </Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>

    <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
      <CustomButton text="Imprimir" color="white" backgroundColor='#16a34a' onClick={handleImprimir}/>
      <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
    </Box>
      
    </CustomBox>
  )
}

export default DetailQueryView

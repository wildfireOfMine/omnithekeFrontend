import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { relatedReportsGet } from '../../store/PatientSlice';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';

const RelatedReports = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {id} = useParams();
  useEffect(() =>{
    dispatch(relatedReportsGet(id)).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);
  const handleCustomButton = () => {
        navigate(-1);
  }
  return (
    <Box sx={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "10px 16px 64px"
        }}>
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 4
            }}
        >
            <Typography variant='h1' sx={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "#1f2933",
            margin: "12px",
            fontWeight: 800,
            textAlign: 'center'
            }}>Reportes asociados al episodio</Typography>
        

            <Box sx={{ alignSelf: "flex-start" }}>
                <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 700}}></Typography>
            {data?.map((report) =>
            {
                return <Paper
                key={report.id}
                elevation={2}
                sx={{
                    p: 3,
                    borderRadius: 3
                }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2}}>Informe #{report.id}</Typography>

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                        <Typography fontWeight={600}>Descripción</Typography>
                        <Typography>{report.subject}</Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                        <Typography fontWeight={600}>Escrito el:</Typography>
                        <Typography>{new Date(report.reportTimestamp).toLocaleString("es-ES")}</Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                        <Typography fontWeight={600}>Doctor:</Typography>
                        <Typography>{report.doctorName}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            })}

        </Box>
    </Box>
                
  )
}

export default RelatedReports

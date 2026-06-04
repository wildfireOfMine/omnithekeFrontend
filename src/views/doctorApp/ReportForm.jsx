import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { incidentGetAsDoctor, myPatientsAsDoctor, reportsPost } from '../../store/DoctorSlice';
import { toast } from 'react-toastify';


const ReportForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [patient, setPatient] = useState("");
    const [incident, setIncident] = useState(false);
    const [data, setData] = useState([]);
    const [chosenIncident, setChosenIncident] = useState([]);
    const [incidents, setIncidents] = useState([]);
    useEffect(() =>{
        dispatch(myPatientsAsDoctor()).unwrap().then(data => setData(data));
    }, [dispatch])

    useEffect(() => {
      if (incident && patient) {
          dispatch(incidentGetAsDoctor(patient)).unwrap().then(data => setIncidents(data));
      }
    }, [incident, patient, dispatch]);
    console.log(incidents);

    const handlePatient = (e) => {
        setPatient(e.target.value);
    }

    const handleIncident = (e) => {
      setChosenIncident(e.target.value);
    }

    const handleBoolean = (e) => {
        console.log("Test");
        console.log(e.target.value);
        if (e.target.value == true) {
            setIncident(true);
        } else {
            setIncident(false);
        }
    }

    const handleCustomButton = () => {
        navigate(-1);
    }
    
    const handleForm = async (e) => {
        e.preventDefault();
        const {subject, content} = e.currentTarget;
        let report;

          if (incident) {
            report = {
                patient, 
                subject: subject.value,
                content: content.value,
                incident: chosenIncident
            }
          } else {
            report = {
                patient, 
                subject: subject.value,
                content: content.value,
            }
          }

            try {
                await dispatch(reportsPost(report)).unwrap();
                toast.success("Informe creado con éxito");
                navigate("/doctor/myReports");
            } catch (err) {
                console.log(err);
                toast.error(err);
                toast.error(err?.email ? err.email.join(", ") : "Informe fallido");
            }
    }
    
  return (
    <Box sx={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>Escribe un Informe</Typography>
      </Box>

      <Box component="form" onSubmit={handleForm} 
      sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        }}> 
            <Box component="div"
            sx={{
              padding: "50px 0",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "30px"
            }}>
              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Paciente</Typography>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="patient"
                    id="patient"
                    value={patient}
                    label="Patient"
                    onChange={handlePatient}
                    fullWidth
                    displayEmpty
                  > 
                    <MenuItem value="" disabled>Selecciona un paciente</MenuItem>
                    {data.map((patient) => {
                        return <MenuItem value={patient.id}>{patient.name}</MenuItem>
                    })}
                  </Select>
                  </FormControl>
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Asunto</Typography>
                  <TextField type="text" id="subject" name="subject" placeholder='Nuevo Informe en Algo...' variant="outlined"
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Contenido</Typography>
                  <TextField type="text" id="content" name="content" placeholder='Tienes algo...' variant="outlined" multiline rows={6}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>¿Está relacionado con algún episodio?</Typography>

                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="incidentBoolean"
                    id="incidentBoolean"
                    value={incident}
                    label="incidentBoolean"
                    onChange={handleBoolean}
                    fullWidth
                  > 
                    <MenuItem value={true}>Sí</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                  </FormControl>

                  { incident && <>
                    <Box>
                      <Typography variant='h6' sx={{
                        fontWeight: 600,
                        color: "#374151"
                        
                      }}>Episodios</Typography>
                      <FormControl variant="standard" fullWidth>
                        <Select
                          labelId="incidents"
                          id="incidents"
                          value={chosenIncident}
                          label="Incidents"
                          onChange={handleIncident}
                          fullWidth
                          displayEmpty
                        >
                          <MenuItem value="" disabled>Selecciona un episodio</MenuItem>
                          {incidents.map((incident) => {
                              return <MenuItem value={incident.id}>{incident.description}</MenuItem>
                          })}
                        </Select>
                        </FormControl>
                    </Box>
                  </>}
              </Box>

              
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 4,
                flexWrap: "wrap"
              }}
            > 
              <CustomButton color="#fff" text="Volver atrás" backgroundColor='#6b7280' onClick={handleCustomButton}/>
              <CustomButton color="#fff" text="Crear" backgroundColor='#16a34a' type='submit'/>
            </Box>

          </Box>

      </Box>
    </Box>
  )
}

export default ReportForm

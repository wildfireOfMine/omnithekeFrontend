import { Box, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomCard from '../../components/CustomCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { patientGet, patientPatch } from '../../store/OfficeSlice';
import { doctorGet } from '../../store/OfficeSlice';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';

const AttachNewDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.doctor.loading);
  const [chosenPatient, setChosenPatient] = useState([]);
  const [patients, setPatients] = useState([]);
  const [chosenDoctor, setChosenDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  
  useEffect(() =>{
    dispatch(patientGet()).unwrap().then(data => setPatients(data));
  }, [dispatch])

  useEffect(() => {
    dispatch(doctorGet()).unwrap().then(data => setDoctors(data));
  }, [dispatch]);
  console.log(patients);
  console.log(doctors);

  const handleCustomButton = () => {
    navigate(-1);
  }

  const handlePatient = (e) => {
    setChosenPatient(e.target.value);
  }

  const handleDoctor = (e) => {
    setChosenDoctor(e.target.value);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await dispatch(patientPatch({patientId: chosenPatient, doctorId: chosenDoctor})).unwrap();
      toast.success("Paciente asignado con éxito");
    } catch (err) {
      console.log(err);
      toast.error(err?.email ? err.email.join(", ") : "Paciente asignado sin éxito");
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
            }}>Asigna un Paciente a un Doctor del Consultorio</Typography>
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
                            
                          }}>Pacientes</Typography>
                          <FormControl variant="standard" fullWidth>
                            <Select
                              labelId="patient"
                              id="patient"
                              value={chosenPatient}
                              label="Patient"
                              onChange={handlePatient}
                              fullWidth
                              displayEmpty
                            > 
                              <MenuItem value="" disabled>Selecciona un paciente</MenuItem>
                              {patients.map((patient) => {
                              const patientName = patient.secondSurname && patient.firstSurname
                                  ? `${patient.firstSurname} ${patient.secondSurname}, ${patient.name}`
                                  : patient.firstSurname
                                  ? `${patient.firstSurname}, ${patient.name}`
                                  : patient.name;
                                  return <MenuItem value={patient.id}>{patientName}</MenuItem>
                              })}
                            </Select>
                            </FormControl>
                        </Box>
                      </Box>
                    <Box>
                      <Typography variant='h6' sx={{
                        fontWeight: 600,
                        color: "#374151"
                        
                      }}>Doctores</Typography>
                      <FormControl variant="standard" fullWidth>
                        <Select
                          labelId="doctor"
                          id="doctor"
                          value={chosenDoctor}
                          label="doctor"
                          onChange={handleDoctor}
                          fullWidth
                          displayEmpty
                        >
                          <MenuItem value="" disabled>Selecciona un doctor</MenuItem>
                          {doctors.map((doctor) => {
                                const doctorName = doctor.secondSurname && doctor.firstSurname
                                  ? `${doctor.firstSurname} ${doctor.secondSurname}, ${doctor.name}`
                                  : doctor.firstSurname
                                  ? `${doctor.firstSurname}, ${doctor.name}`
                                  : doctor.name;
                              return <MenuItem value={doctor.id}>{doctorName}</MenuItem>
                          })}
                        </Select>
                        </FormControl>
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
  )
}

export default AttachNewDoctors

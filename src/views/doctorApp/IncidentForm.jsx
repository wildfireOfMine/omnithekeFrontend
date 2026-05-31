import React, { useEffect, useState } from 'react'
import { incidentPost, myPatientsAsDoctor } from '../../store/DoctorSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';

const IncidentForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [patient, setPatient] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() =>{
        dispatch(myPatientsAsDoctor()).unwrap().then(data => setData(data));
    }, [dispatch]);

    const handlePatient = (e) => {
        setPatient(e.target.value);
    }

    const handleCustomButton = () => {
        navigate(-1);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const {description} = e.currentTarget;
        const incident = {
            patient, 
            description: description.value,
            beginningDate: new Date().toISOString(),
            endingDate: null,
            active: true
        }
    
        try {
            await dispatch(incidentPost(incident)).unwrap();
            toast.success("Informe creado con éxito");
        } catch (err) {
            console.log(err);
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
        }}>Registra un Episodio</Typography>
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
              gap: 3
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
                  > 
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
                }}>Contenido</Typography>
                <TextField type="text" id="description" name="description" placeholder='Un nuevo episodio de...' variant="outlined" multiline rows={6}
                    sx={{
                        borderRadius: "8px",
                        color: "#1f2933",
                        transition: "border-color 0.15s",
                        fontFamily: "inherit",
                        width: "100%",
                        border: "1.5px solid #fff",
                        fontSize: "0.95rem"
                    }}/>
            </Box>

            <Box sx={{ alignSelf: "center" }}>
                <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
                <CustomButton color="#fff" text="Crear" backgroundColor='#2563eb' type='submit'/>
            </Box>
        </Box>
      
    </Box>
  )
}

export default IncidentForm

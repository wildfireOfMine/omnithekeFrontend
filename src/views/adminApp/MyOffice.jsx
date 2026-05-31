import { Box, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { myAdminProfile } from '../../store/AdminSlice';
import { officeGet, officePut } from '../../store/OfficeSlice';
import { toast } from 'react-toastify';
import CustomField from '../../components/CustomField';

const MyOffice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.doctor.loading);
    const [data, setData] = useState({});
    const [edit, setEdit] = useState(false);
    console.log("LOADING", loading);
    useEffect(() => {
            dispatch(officeGet()).unwrap().then(data => setData({
              identityCode: data.identityCode,
              name: data.name,
              address: data.address,
              city: data.city,
              country: data.country,
              postCode: data.postCode,
              telephone: data.telephone,
              fax: data.fax
            }));
        }, [dispatch]);
    
    console.log(data);

    const handleCustomButton = () => {
        navigate(-1);
    }

    const handlePutMethod = () => {
      if (!edit) {
        setEdit(true);
      }
    }
    
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
    
    const handleConfirmPut = async (e) => {
      e.preventDefault();
        const office = {
          identityCode: data.identityCode,
          name: data.name,
          address: data.address,
          city: data.city,
          country: data.country,
          postCode: data.postCode,
          telephone: data.telephone,
          fax: data.fax}
          try {
            await dispatch(officePut(office)).unwrap();
            toast.success("PUT exitoso");
          } catch (err) {
            console.log(err);
            toast.error(err?.email ? err.email.join(", ") : "PUT fallido");
          }
      setEdit(false);
    }

    const fieldStyle = {
      width: "100%"
    };
  return (
    <Box sx={{
      maxWidth: "1660px",
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
        }}>Mi Perfil de Administrador</Typography>
      </Box>

      <Box sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        }}>
          {data && <>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <CustomField
                  label="Nombre"
                  name="name"
                  value={data.name}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="Consultorio Central"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CustomField
                  label="Código Identificativo"
                  name="identityCode"
                  value={data.identityCode}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="OFF001"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <CustomField
                  label="Dirección"
                  name="address"
                  value={data.address}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="Calle Mayor 12"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <CustomField
                  label="Ciudad"
                  name="city"
                  value={data.city}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="Murcia"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <CustomField
                  label="Código Postal"
                  name="postCode"
                  value={data.postCode}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="30001"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <CustomField
                  label="País"
                  name="country"
                  value={data.country}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="España"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CustomField
                  label="Teléfono"
                  name="telephone"
                  value={data.telephone}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="+34 600123123"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CustomField
                  label="Fax"
                  name="fax"
                  value={data.fax}
                  edit={edit}
                  fieldStyle={fieldStyle}
                  handleInputChange={handleInputChange}
                  placeholder="968123456"
                />
              </Grid>
            </Grid>
          </>
          }
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
            flexWrap: "wrap"
          }}
        >
          {!edit ? (
            <CustomButton color="#fff" text="Modificar" backgroundColor="#2563eb" onClick={handlePutMethod}/>
          ) : (
            <CustomButton color="#fff" text="Confirmar" backgroundColor="#16a34a" onClick={handleConfirmPut}/>
          )}

          <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
        </Box>
      </Box>
      
    </Box>
  )
}

export default MyOffice

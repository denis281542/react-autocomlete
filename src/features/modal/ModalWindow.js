import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { postUser, userAdded } from '../users/userSlice';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const ModalWindow = () => {    
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dirty, setDirty] = useState(false);
  const [dirtyName, setDirtyName] = useState(false);
  const [dirtyEmail, setDirtyEmail] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()

  const saveUser = async () => {
    const {id} = await  dispatch(postUser({ name, phone, email })).unwrap()

    dispatch(userAdded({ phone, name, email, id }))

    setName('')
    setEmail('')
    setPhone('')

    setDirty(false)
    setDirtyName(false)
    setDirtyEmail(false)

    setOpen(false)
  }

  const onChange = (e) => {
    setPhone(e.target.value)
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const isPhone = () => {
    return (/\+7\d{3}\d{3}\d{2}\d{2}/.test(phone))
  }
  const isEmail = () => {
    return (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))
  }
  const isName = () => {
    return name.length >= 2
  }

  const error = (dirty, input, isValid) => {
    return dirty && input === '' || dirty && !isValid()
  }

  const helperText = (dirty, input, isValid, error1, error2) => {
    if(dirty && input === '') {
      return error1
    }
    if(dirty && !isValid()) {
      return error2
    }
  }

  return(
    <div>
      <Button 
        onClick={handleOpen}
        variant="contained"
        sx={{marginTop: '15px'}}
      ><PersonAddAltOutlinedIcon />Добавить жильца</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', transform: 'scale(1)' }}

      >
        <Box component="form" sx={{position: 'relative'}}>
          <Button 
            sx={{position: 'absolute', right: '0', paddingTop: '15px'}} 
            onClick={handleClose}
          ><CloseIcon /></Button>

          <Card sx={{padding: '60px'}}>
              <CardContent>
                <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                  <Grid item xs={12}>
                    <TextField 
                      id="outlined-basic" 
                      // type="number"  
                      required label="Номер телефона" 
                      variant="outlined" 
                      autoComplete="off"
                      onChange={onChange}
                      value={phone}
                      onBlur={() => {
                        setDirty(true)
                        isPhone()
                      }}
                      error={error(dirty, phone, isPhone)}
                      onFocus={() => setDirty(false)}
                      helperText={helperText(dirty, phone, isPhone, 'Введите номер телефона', 'Неверный номер телефона')}
                    />
                  </Grid>
                </Typography>

                <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                  <Grid item xs={12}>
                    <TextField 
                      id="outlined-basic" 
                      label="ФИО" 
                      variant="outlined"
                      type="text"
                      autoComplete="off"                      
                      onChange={onChangeName}
                      value={name}
                      onBlur={() => setDirtyName(true)}
                      error={error(dirtyName, name, isName)}
                      helperText={helperText(dirtyName, name, isName, 'Введите имя', 'Короткое имя')}
                      onFocus={() => setDirtyName(false)}
                    />
                  </Grid>
                </Typography>

                <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                  <Grid item xs={12}>
                    <TextField 
                      id="outlined-basic" 
                      label="Email" 
                      variant="outlined"
                      type="email"
                      autoComplete="off"
                      onChange={onChangeEmail}
                      value={email}
                      onBlur={() => setDirtyEmail(true)}
                      error={error(dirtyEmail, email, isEmail)}
                      helperText={helperText(dirtyEmail, email, isEmail, 'Введите email', 'Неправильный email')}
                      onFocus={() => setDirtyEmail(false)}
                    />
                  </Grid>
                </Typography>

              </CardContent>

              <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '15px'}}>
                <Button 
                  size="large" 
                  variant="contained"
                  // type="submit"
                  onClick={saveUser}
                >Добавить жильца</Button>
              </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  )  
}
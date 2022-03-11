import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { bindUser, postUser } from '../users/userSlice';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ModalButton } from './ModalButton';
import { ModalOpenButton } from './ModalOpenButton';
import { Input } from './Input';
import { isPhone, isEmail, isName } from '../utils';

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
  const [disabledBtn, setDisabledBtn] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()

  const addressId = useSelector(state => state.address.addressId)
  const status = useSelector(state => state.users.status)

  const saveUser = async e => {
    e.preventDefault()
    setOpen(false)

    const { response } = await dispatch(postUser({ name, phone, email })).unwrap()
    const clientId = response.id

    dispatch(bindUser( {addressId, clientId} ))

    setName('')
    setEmail('')
    setPhone('')

    setDirty(false)
    setDirtyName(false)
    setDirtyEmail(false)
  }

  const onChange = (e) => {
    setDisabledBtn(false)
    setPhone(e.target.value)
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  return(
    <div>
      <ModalOpenButton 
        disabled={status === 'creation'}
        handleOpen={handleOpen}
        icon={<PersonAddAltOutlinedIcon/>}
      />
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
                    <Input 
                      label='Номер телефона.'
                      placeholder='Например +79091234567'
                      name='phone'
                      required={true}
                      onChange={onChange}
                      value={phone}
                      isValid={() => isPhone(phone)}
                      errorMessageEmpty='Введите номер телефона'                 
                      errorMessageInvalid='Неверный номер телефона'                    
                    />
                  </Grid>
                </Typography>

                <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                  <Grid item xs={12}>
                    <Input 
                      label='ФИО'
                      onChange={onChangeName}
                      value={name}
                      isValid={() => isName(name)}
                      errorMessageEmpty='Введите имя'                 
                      errorMessageInvalid='Короткое имя'                    
                    />
                  </Grid>
                </Typography>

                <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                  <Grid item xs={12}>
                    <Input
                      label='Email' 
                      onChange={onChangeEmail}
                      value={email}
                      isValid={() => isEmail(email)}
                      errorMessageEmpty='Введите email'                 
                      errorMessageInvalid='Неправильный email'                    
                    />
                  </Grid>
                </Typography>

              </CardContent>

              <ModalButton 
                onClick={saveUser}
                ButtonText='Добавить жильца'
                // disabled={!(isPhone(phone) && isEmail(email) && isName(name))}
              />
          </Card>
        </Box>
      </Modal>
    </div>
  )  
}
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { ModalButton } from './ModalButton';
import { useState } from 'react';
import { Input } from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { isPhone, isName, isEmail } from '../utils'
import { bindUser, postUser, userUpdated } from '../users/userSlice';

export const EditWindow = ({open, handleClose, userId}) => {
    const user = useSelector(state => state.users.users.find(user => user.id === userId))
    const [phone, setPhone] = useState(user.phone)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const dispatch = useDispatch()
    const addressId = useSelector(state => state.address.addressId)

    const editUser = async e => {
        e.preventDefault()

        //Сделать редактирование
        
        const {id} = await dispatch(postUser({ name, phone, email })).unwrap()
        dispatch(userUpdated({ id: userId, name, phone, email }))
        dispatch(bindUser( {addressId, id} ))

        handleClose()
    }
    
    return (
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
                                label='Номер телефона'
                                name='phone'
                                required={true}
                                disabled={true}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
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
                                name='name'
                                required={false}
                                value={name}
                                onChange={e => setName(e.target.value)}
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
                                name='email'
                                required={false}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                isValid={() => isEmail(email)}
                                errorMessageEmpty='Введите email'                 
                                errorMessageInvalid='Неправильный email'                    
                            />
                        </Grid>
                    </Typography>

                </CardContent>

                <ModalButton 
                    onClick={editUser}
                    ButtonText='Сохранить'
                />
            </Card>
            </Box>
        </Modal>
    )
}